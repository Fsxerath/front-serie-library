import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-actions',
  templateUrl: './form-actions.component.html',
  styleUrls: ['./form-actions.component.scss'],
})
export class FormActionsComponent {
  @Input() button_text!: string;
  @Input() paragraph!: string;
  @Input() action!: string;
  @Input() redirect!: string;
  @Input() disabled!: boolean;
}
