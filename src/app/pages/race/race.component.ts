import { ChangeDetectionStrategy, Component, inject, type OnInit, signal } from '@angular/core';
import { Game } from '../../game/game';
import { SettingsService } from '../../common/services/settings.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonIconComponent } from '../../common/components/button-icon/button-icon.component';
import { RaceConfig } from '../../game/models/race-config';
import type { RaceResult } from '../../game/models/race-result';
import { StockableRecord } from '../../game/models/stockable-record';
import { RankingLineComponent } from '../../common/components/ranking-line/ranking-line.component';
import { LocalEventService } from '../../common/services/local-event.service';
import type { LocalEvent } from '../../common/models/local-event';
import { TrackService } from '../../common/services/track.service';
import { concatMap, filter, from, map, type Observable, of, takeUntil, tap } from 'rxjs';
import { Destroyable } from '../../common/components/destroyable/destroyable.component';
import { RaceRanking } from '../../common/models/race-ranking';
import { EventService } from '../../common/services/event.service';
import { AuthService } from '../../common/services/auth.service';
import type { StockableGhost } from '../../game/models/stockable-ghost';

@Component({
    selector: 'app-race',
    standalone: true,
    imports: [ButtonIconComponent, RankingLineComponent],
    templateUrl: './race.component.html',
    styleUrl: './race.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RaceComponent extends Destroyable implements OnInit {
    private router = inject(Router);
    private localEventService = inject(LocalEventService);
    private eventService = inject(EventService);
    private trackService = inject(TrackService);
    private route = inject(ActivatedRoute);
    private settingsService = inject(SettingsService);

    protected raceConfig = signal<RaceConfig | undefined>(undefined);
    protected raceRanking = signal<RaceRanking | undefined>(undefined);

    private game?: Game;

    private type = (this.route.snapshot.data as { type: 'local' | 'online' }).type;
    private eventId = (this.route.snapshot.params as { eventId: string }).eventId;
    private user = inject(AuthService).getUser();

    constructor() {
        super();
        if (this.type === 'local') {
            if (!this.localEventService.getEvent()) {
                this.router.navigate(['/local-event']);
            }
        }
    }

    ngOnInit(): void {
        const config$: Observable<RaceConfig> =
            this.type === 'local'
                ? this.buildLocalRaceConfig$(this.localEventService.getEvent()!)
                : this.buildOnlineRaceConfig$(this.eventId);
        config$
            .pipe(
                tap(config => {
                    this.game = new Game(config, this.settingsService);
                    this.game.initialize();
                }),
                tap(config => this.raceConfig.set(config)),
                tap(() => this.listenToRaceStop()),
                takeUntil(this.destroyed$)
            )
            .subscribe();
    }

    public override ngOnDestroy(): void {
        this.game?.stopProperly();
    }

    protected exitRace(): void {
        if (this.type === 'local') {
            this.router.navigate(['/local-event']);
        } else {
            this.router.navigate(['/online-event', this.eventId]);
        }
    }

    private buildLocalRaceConfig$(event: LocalEvent): Observable<RaceConfig> {
        return this.trackService
            .getTrackGhost$('local', event.track!.id!)
            .pipe(
                map(
                    globalGhost =>
                        new RaceConfig(event.id, event.incomingRaces[0].rider, event.track!, globalGhost, event.ghost)
                )
            );
    }

    private buildOnlineRaceConfig$(eventId: string): Observable<RaceConfig> {
        return this.eventService.getEvent$(eventId).pipe(
            concatMap(event =>
                this.trackService
                    .getTrack$('online', event.trackId!)
                    .pipe(map(track => new RaceConfig(event.id, this.user!.name!, track)))
            ),
            concatMap(config =>
                this.trackService.getTrackGhost$('online', config.track.id!).pipe(
                    map(ghost => {
                        config.globalGhost = ghost;
                        return config;
                    })
                )
            ),
            concatMap(config =>
                this.trackService.getTrackGhost$('online', config.track.id!, eventId).pipe(
                    map(ghost => {
                        config.eventGhost = ghost;
                        return config;
                    })
                )
            ),
            tap(config => this.raceConfig.set(config))
        );
    }

    private listenToRaceStop(): void {
        let raceResult: RaceResult;
        from(this.game!.raceStopped)
            .pipe(
                tap(result => {
                    if (!result) {
                        this.exitRace();
                    }
                }),
                filter(Boolean),
                tap(result => (raceResult = result)),
                tap(result => {
                    if (this.type === 'local') {
                        this.localEventService.addEventResult(result);
                    }
                }),
                map(
                    result =>
                        new StockableRecord(this.raceConfig()!.track.id!, result.rider, result.date, result.timing)
                ),
                concatMap(result => this.trackService.addTrackRecord$(this.type, this.eventId, result)),
                concatMap(() => this.trackService.getTrackRecords$(this.type, this.raceConfig()!.track.id!)),
                tap(results =>
                    this.raceRanking.set(new RaceRanking(results, raceResult.timing, raceResult.missedGates))
                ),
                concatMap(results => {
                    if (this.type === 'online') {
                        if (
                            this.isEventBest(raceResult, this.raceConfig()!.eventGhost) ||
                            this.isGlobalBest(raceResult, this.raceConfig()!.globalGhost)
                        ) {
                            return this.trackService.updateTrackGhost$(this.type, this.eventId, raceResult.ghost);
                        }
                    } else {
                        if (this.isEventBest(raceResult, this.raceConfig()!.eventGhost)) {
                            this.localEventService.updateEventGhost(raceResult.ghost);
                        }

                        if (this.isGlobalBest(raceResult, this.raceConfig()!.globalGhost)) {
                            return this.trackService.updateTrackGhost$(
                                this.type,
                                this.raceConfig()!.track.id!,
                                raceResult.ghost
                            );
                        }
                    }
                    return of(null);
                }),
                takeUntil(this.destroyed$)
            )
            .subscribe();
    }

    private isEventBest(raceResult: RaceResult, eventGhost?: StockableGhost): boolean {
        return !eventGhost?.totalTime || raceResult.timing < eventGhost.totalTime!;
    }

    private isGlobalBest(raceResult: RaceResult, globalGhost?: StockableGhost): boolean {
        return !globalGhost?.totalTime || raceResult.timing < globalGhost.totalTime!;
    }
}
