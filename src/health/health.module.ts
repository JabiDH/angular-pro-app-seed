import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/shared/guards/auth.guard';
import { AuthService } from '../auth/shared/services/auth/auth.service';


export const ROUTES: Routes = [
    { path: 'schedule', canActivate: [AuthGuard], loadChildren: './schedule/schedule.module#ScheduleModule' },
    { path: 'meals', canActivate: [AuthGuard], loadChildren: './meals/meals.module#MealsModule' },
    { path: 'workouts', canActivate: [AuthGuard], loadChildren: './workouts/workouts.module#WorkoutsModule' }
]

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES)
    ]
})
export class HealtModule {
    constructor(        
    ) { }
}