import { Component } from "@angular/core";

@Component({
    selector: 'employees-component',
    standalone: true,
    imports: [],
    templateUrl: './employees.component.html',
    styleUrl: './employees.component.css'
})
export class EmployeesComponent{

    title = 'Employees!'
}