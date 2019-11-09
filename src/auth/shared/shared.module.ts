import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import { AuthFormComponent } from './components/auth-form/auth-form.component';

import { AuthService } from './services/auth/auth.service'

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [
        AuthFormComponent
    ],
    exports: [
        AuthFormComponent
    ]
})

export class SharedModule {
    static forRoot(): ModuleWithProviders{
        return {
            ngModule: SharedModule,
            providers: [
                AuthService
            ]
        }

    } 
}