import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson04',
  templateUrl: './lesson04.component.html',
  styleUrls: ['./lesson04.component.scss']
})
export class Lesson04Component implements OnInit {

  public cars: ICar[] = [
    {
      mark: 'NisSan',
      model: 'Juke',
      createAt: new Date(2015, 6, 1, 14, 30, 0, 0),
      color: 'dark purple',
      options: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore accusamus autem corporis sunt distinctio modi qui ut quam veniam et!',
      power: 190,
      engine: 1.6,
      price: 13000
    },
    {
      mark: 'Hyundai',
      model: 'Tucson',
      createAt: new Date(2021, 8, 10, 12, 0, 30, 0),
      color: 'black',
      options: 'Lorem ipsum',
      power: 210,
      engine: 2.0,
      price: 31000
    },
    {
      mark: 'Audi',
      model: 'Q8',
      createAt: new Date(2022, 1, 5, 9, 15, 35, 0),
      color: 'Silver',
      options: 'Lorem ipsum',
      power: 290,
      engine: 3.0,
      price: 91000
    },
    {
      mark: 'Pegeout',
      model: '3008',
      createAt: new Date(2021, 11, 31, 20, 5, 0, 0),
      color: 'Red',
      options: 'Lorem ipsum',
      power: 200,
      engine: 2.0,
      price: 41000
    }
  ];

  public field = '';
  public type = 'asc';

  constructor() { }

  ngOnInit(): void {
  }

  checkData(): void {
    console.log('Cars = ', this.cars);
  }

  changeSort(type: string): void {
    this.type = type;
  }

}

export interface ICar {
  mark: string;
  model: string;
  createAt: Date;
  color: string;
  options: string;
  power: number;
  engine: number;
  price: number;
}