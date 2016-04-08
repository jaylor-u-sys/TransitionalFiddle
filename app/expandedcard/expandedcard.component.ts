import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter } from 'angular2/core';

@Component({
  styleUrls: ['app/expandedcard/expandedcard.component.css'],
  templateUrl: 'app/expandedcard/expandedcard.component.html',
  selector: 'expanded-card'
})
export class ExpandedCardComponent{
  _show: boolean;
  @Input() showBox: boolean;
  @Input() tabs: Array<string>;
  @Output() onDismiss: EventEmitter<any> = new EventEmitter<any>();
  constructor() {
  }

  hideBox() {
    this.onDismiss.emit("FDFEID");
  }
}
