import { Component, model } from '@angular/core';
import { ButtonIconComponent } from '../button-icon/button-icon.component';

@Component({
    selector: 'app-checkbox',
    standalone: true,
    imports: [ButtonIconComponent],
    templateUrl: './checkbox.component.html',
    styleUrl: './checkbox.component.scss'
})
export class CheckboxComponent {
    public checked = model(false);
}
