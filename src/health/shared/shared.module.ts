import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MealsService } from './services/meals/meals.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        AngularFireDatabaseModule
    ]
})
export class SharedModule {
    constructor(        
    ) { }

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                MealsService                
            ]
        }
    }
}