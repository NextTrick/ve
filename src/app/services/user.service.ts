import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class UserService {
    constructor (private http: Http) {

    }

    signup(userName:string, email: string, password: string) {
        return this.http.post(
            environment.backendUrl + 'user',
            {userName: userName, email: email, password: password}
        );
    }

    login(email:string, password:string) {
        return this.http.post(
            environment.backendUrl + 'user',
            {email: email, password: password}
        );
    }

    recoverPassword(email:string) {
        return this.http.post(
          environment.backendUrl + 'user',
          {email: email}
        );
    }
}