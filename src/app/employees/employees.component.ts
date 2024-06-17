import { Component } from "@angular/core";

@Component({
    selector: 'employees-component',
    standalone: true,
    imports: [],
    templateUrl: './employees.component.html',
    styleUrl: './employees.component.css'
})
export class EmployeesComponent{

    registrationState = 'Nothing here...';

    checkRegistrationState(event:Event){

        if ( (<HTMLInputElement>event.target).value == "yes" ){

            this.registrationState = 'Registered!'; 
        }
        else{

            this.registrationState = 'Nothing here, again...';
        }
    }
}