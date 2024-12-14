import { Injectable } from '@angular/core';
import { from, map, type Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import type { RecordAuthResponse, RecordModel } from 'pocketbase';
import { User } from '../models/user';
import { FormatterUtils } from '../utils/formatter.utils';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public isAuth(): boolean {
        return environment.pb.authStore.isValid;
    }

    public logout(): void {
        environment.pb.authStore.clear();
    }

    public login$(email: string, password: string): Observable<RecordAuthResponse> {
        return from(environment.pb.collection('users').authWithPassword(email, password));
    }

    public register$(email: string, name: string, password: string): Observable<User> {
        return from(
            environment.pb.collection('users').create({
                email: FormatterUtils.valueFormatter(email, 'lower'),
                name: FormatterUtils.valueFormatter(name, 'name'),
                password,
                passwordConfirm: password
            })
        ).pipe(
            map(userRecord => User.buildFromRecord(userRecord)),
            map(newUser => {
                newUser.email = email;
                return newUser;
            })
        );
    }

    public getUser(): User | null {
        return environment.pb.authStore.isValid
            ? User.buildFromRecord(environment.pb.authStore.record as RecordModel)
            : null;
    }
}