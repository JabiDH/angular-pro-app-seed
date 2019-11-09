import { Component } from "@angular/core";
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../shared/services/auth/auth.service'


@Component({
    selector: 'register',
    templateUrl: 'register.template.html'
})
export class RegisterComponent {

    error: string;

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    async registerUser(event: FormGroup) {
        const { email, password } = event.value;
        try {
            await this.authService.createUser(email, password);
            this.router.navigate(['/']);
        } catch (err) {
            this.error = err.message;
        }
    }
}