import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss'],
})
export class PrimaryButtonComponent {
  @Input() text!: string;
  @Input() text_size!: string;
  @Input() button_color!: string;
  @Input() padding!: string;
  @Input() border_radius!: string;
  @Input() disabled!: boolean;
}
