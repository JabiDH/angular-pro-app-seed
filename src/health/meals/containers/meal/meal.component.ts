import { Component } from '@angular/core';
import { Meal } from '../../../shared/services/meals/meals.service';

@Component({
    selector: 'meal',
    styleUrls: ['meal.component.scss'],
    templateUrl: 'meal.template.html'
})
export class MealComponent {

    addMeal(event: Meal){
        console.log(event);
    }
}