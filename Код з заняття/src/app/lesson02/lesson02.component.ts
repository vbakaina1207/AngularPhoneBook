import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson02',
  templateUrl: './lesson02.component.html',
  styleUrls: ['./lesson02.component.scss']
})
export class Lesson02Component implements OnInit {

  public isAdded = true;
  public isOpenModal = false;
  public arrNames = ['Ivan','Petro', 'Pavlo', 'Iryna', 'Alina', 'Oksana'];
  public person!: string;
  public isColor = false;
  public objStyles = {
    color: 'blue',
    fontSize: '55px'
  }
  public newName!: string;
  public editStatus = false;
  public editIndex!: number;
  public userData = [
    { name: 'Ivan', age: 22 },
    { name: 'Petro', age: 33 },
    { name: 'Pavlo', age: 18 },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  changeElement(): void {
    this.isAdded = !this.isAdded;
  }

  showModal(): void {
    this.isOpenModal = true;
  }

  closeModal(): void {
    this.isOpenModal = false;
  }

  changeColor(): void {
    this.isColor = !this.isColor;
  }

  addName(): void {
    this.arrNames.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number): void {
    this.arrNames.splice(index, 1);
  }

  editName(index: number): void {
    this.newName = this.arrNames[index];
    this.editIndex = index;
    this.editStatus = true;
  }

  updateName(): void {
    this.arrNames[this.editIndex] = this.newName;
    this.newName = '';
    this.editStatus = false;
  }
}
