import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'employee-component',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

  private _name: string;
  private _age: number;

  constructor(){
    this._name = "";
    this._age = 0;
  }

  get age(): number{ 
    return this._age;
  }

  set age(age: number){
    this._age = age;
  }

  get name(): string{
    return this._name;
  }

  set name(name: string){
    this._name = name;
  }
}
