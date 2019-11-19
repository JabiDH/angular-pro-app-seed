import { Component } from '@angular/core';
import { Meal, MealsService } from '../../../shared/services/meals/meals.service';
import { Router } from '@angular/router';

@Component({
    selector: 'meal',
    styleUrls: ['meal.component.scss'],
    templateUrl: 'meal.template.html'
})
export class MealComponent {

    constructor(
        private mealsService: MealsService,
        private router: Router
    ) {

    }

    async addMeal(event: Meal) {        
        await this.mealsService.addMeal(event);
        this.backToMeals();
    }

    backToMeals() {
        this.router.navigate(['meals']);
    }
}