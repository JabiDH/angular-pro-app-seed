import { Component } from "@angular/core";
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'register',    
    templateUrl: 'register.template.html'    
})
export class RegisterComponent {

    registerUser(event: FormGroup){
        console.log(event.value);
    }
}