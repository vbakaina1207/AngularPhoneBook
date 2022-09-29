import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson01',
  templateUrl: './lesson01.component.html',
  styleUrls: ['./lesson01.component.scss']
})
export class Lesson01Component implements OnInit {

  public name = 'Ivan';
  public age = 22;
  public status = true;
  public arrNames = ['Alina', 'Petro', 'Pavlo'];
  public person = { firstName: 'Oksana', lastName: 'Valova' };
  public homePageUrl = 'https://www.google.com';
  public homePageName = 'Google';
  public classes = 'btn btn-success';
  public isBtn = true;
  public isColor = false;
  public userName = 'user';

  constructor() { }

  ngOnInit(): void {
  }

  showMyName(): string {
    return 'Hello Ivan Ivanov';
  }

  changeColor(event: Event): void {
    console.log(event);
    this.isColor = !this.isColor;
  }

  getName(): void {
    // console.log(this.userName);
    let name = this.userName;
    name = name.split(' ').map( n => n.charAt(0).toUpperCase() + n.slice(1).toLowerCase()).join(' ');  
    this.userName = name;
  }

}
