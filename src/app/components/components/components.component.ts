import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent {
  @Output() emitEvent: EventEmitter<void> = new EventEmitter();
  @Output() emiteEvent1: EventEmitter<void> = new EventEmitter();

}
