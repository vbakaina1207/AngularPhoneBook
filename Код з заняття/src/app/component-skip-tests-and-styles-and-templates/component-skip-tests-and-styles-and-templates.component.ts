import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-skip-tests-and-styles-and-templates',
  template: `
    <button (click)="showMessage()">
      show
    </button>
  `,
  styles: [
    `
      button { width: 100px; height: 30px; background: red }
    `
  ]
})
export class ComponentSkipTestsAndStylesAndTemplatesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showMessage(): void {
    alert('button works');
  }

}
