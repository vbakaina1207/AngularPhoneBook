import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChildExtraComponent } from './child-extra/child-extra.component';

@Component({
  selector: 'app-lesson03',
  templateUrl: './lesson03.component.html',
  styleUrls: ['./lesson03.component.scss']
})
export class Lesson03Component implements OnInit, AfterViewInit {
  @ViewChild(ChildExtraComponent) childExtra!: ChildExtraComponent;

  public myName= 'Ivan';
  public message!: string; 
  public count = 0;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.childExtra);
  }

  ngAfterViewInit(): void {
    console.log(this.childExtra.name);
    console.log(this.childExtra.getMessage());
  }

  getMessage(data: string): void {
    this.message = data;
  }

  checkStatus(status: boolean): void {
    if(status) {
      ++this.count;
    } else {
      if(this.count >= 1){
        --this.count;
      }
    }
  }

  /* 
    
    ngOnChanges
    ngOnInit
    ngDoCheck
      ngAfterContentInit
      ngAfterContentChecked
      ngAfterViewInit
      ngAfterViewChecked
    ngOnDestroy

  */

}
