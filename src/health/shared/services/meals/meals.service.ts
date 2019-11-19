import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { Store } from 'store';

import { AuthService } from '../../../../auth/shared/services/auth/auth.service';
import { Observer } from 'rxjs/Observer';

export interface Meal {
    name: string,
    ingredients: string[],
    timestamp: number,
    $key: string,
    $exists: () => boolean
}

@Injectable()
export class MealsService {

    meals$: Observable<any> = this.db.list(`meals/${this.uid}`)
        .do(next => this.store.set('meals', next));

    constructor(
        private store: Store,
        private db: AngularFireDatabase,
        private authService: AuthService
    ) { }

    get uid() {
        return this.authService.user.uid;
    }

    getMeal(key: string) : Observable<any> {
        if (!key) return Observable.of({});
        return this.store.select<Meal[]>('meals')
            .filter(Boolean)
            .map((meals: Meal[]) => meals.find((meal: Meal) => meal.$key === key));
    }

    addMeal(meal: Meal) {
        return this.db.list(`meals/${this.uid}`).push(meal);
    }

    updateMeal(key: string, meal: Meal) {
        return this.db.object(`meals/${this.uid}/${key}`).update(meal);
    }

    removeMeal(key: string) {
        return this.db.list(`meals/${this.uid}`).remove(key);
    }
}