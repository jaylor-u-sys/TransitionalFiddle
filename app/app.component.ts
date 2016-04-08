import { Component } from 'angular2/core';
import { ExpandedCardComponent} from './expandedcard/expandedcard.component';

@Component({
  templateUrl: "app/app.component.html",
  styleUrls: ["app/app.component.css"],
  selector: "my-app",
  directives: [ExpandedCardComponent]
})
export class AppComponent{
  showDatBoxYo: boolean;
  showTheOtherBox: boolean;
  theTabs = ['this', 'that', 'theother'];
  theOtherTabs = ['foo', 'bar', 'baz'];
  constructor() {
    this.showDatBoxYo = false;
    this.showTheOtherBox = false;
  }

  ChangeBox() {
    this.showDatBoxYo =true;
  }

  ChangeOtherBox() {
    this.showTheOtherBox = true;
  }

  onDismiss(closed: any) {
    this.showDatBoxYo = false;
  }

  onOtherDismiss(closed: any) {
    this.showTheOtherBox = false;
  }
}
