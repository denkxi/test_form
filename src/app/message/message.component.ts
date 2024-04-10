import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [],
  styleUrl: './message.component.css',
  template: '<div class="{{type}}">{{text}}</div>'
})
export class MessageComponent {

  @Input() type!: String;
  @Input() text!: String;

}
