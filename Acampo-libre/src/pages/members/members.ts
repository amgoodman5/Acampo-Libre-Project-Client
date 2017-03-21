import { Component } from '@angular/core';

/*
  Generated class for the Members component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'members',
  templateUrl: 'members.html'
})
export class MembersComponent {

  text: string;

  constructor() {
    console.log('Hello Members Component');
    this.text = 'Hello World';
  }

}
