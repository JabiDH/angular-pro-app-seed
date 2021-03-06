import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Store } from 'store'
import 'rxjs/add/operator/do'

export interface User{
    email: string,
    uid: string,
    authenticated: boolean    
}

@Injectable()
export class AuthService {

    auth$ = this.af.authState
        .do(next => {
            if(!next){
                this.strore.set('user', null);
                return
            }
            const user: User = {
                email: next.email,
                uid: next.uid,
                authenticated: true
            };
            this.strore.set('user', user);
        });

    constructor(
        private af: AngularFireAuth, 
        private strore: Store
    ) { }

    get user() {
        return this.af.auth.currentUser;
    }

    get authState() {
        return this.af.authState;
    }

    createUser(email: string, password: string) {
        return this.af.auth
            .createUserWithEmailAndPassword(email, password);
    }

    loginUser(email: string, password: string) {
        return this.af.auth
            .signInWithEmailAndPassword(email, password);
    }

    logoutUser(){
        return this.af.auth.signOut();
    }

}