import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-skip-tests-and-styles',
  templateUrl: './component-skip-tests-and-styles.component.html',
  styles: [
    `
    p { color: red};
    `
  ]
})
export class ComponentSkipTestsAndStylesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
