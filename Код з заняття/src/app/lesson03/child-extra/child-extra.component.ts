import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child-extra',
  templateUrl: './child-extra.component.html',
  styleUrls: ['./child-extra.component.scss']
})
export class ChildExtraComponent implements OnInit, AfterViewInit {
  // @ViewChild('userName') userName!: ElementRef;
  public name = 'Ivan';

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // this.userName.nativeElement.value = 'Petro';
  }

  getMessage(): string {
    return `Hello ${this.name}`
  }

}
