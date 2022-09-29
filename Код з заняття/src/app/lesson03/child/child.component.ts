import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements 
OnInit, DoCheck, OnChanges, 
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() userName!: string;
  // // @Input() userAge!: number;
  // public _userAge!: number;

  // @Input()
  // set userAge(age: number) {
  //   if(age < 0) this._userAge = 0;
  //   else if(age > 100) this._userAge = 100;
  //   else this._userAge = age
  // }
  // get userAge() {
  //   return this._userAge;
  // }

  // @Output() fromChild = new EventEmitter<string>();
  // @Output() changeCount = new EventEmitter<boolean>();

  constructor() { }

  ngOnChanges(): void {
    console.log('ngOnChanges');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  // sendMessage(): void {
  //   this.fromChild.emit('Some message from child component');
  // }

  // change(status: boolean): void {
  //   this.changeCount.emit(status);
  // }
}
