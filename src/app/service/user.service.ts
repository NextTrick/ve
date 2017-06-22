import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class UserService {
    constructor (private http: Http) {

    }

    signup(companyName:string, email: string, password: string) {
        return this.http.post(
            environment.backendUrl + 'user',
            {companyName: companyName, email: email, password: password}
        );
    }

    login(email:string, password:string) {        
        return this.http.post(
            environment.backendUrl + 'auth/login',
            {email: email, password: password}
        )        
        .do(
            (response) => {
                let body = response.json();
                if (body.success) {
                    this.saveToken(body.suer.token)
                }
            }
        );
    }

    saveToken(token) {
        localStorage.setItem('tsMyxToken', token);
    }

    getToken() {
        localStorage.getItem('tsMyxToken')
    }

    recoverPassword(email:string) {
        return this.http.post(
          environment.backendUrl + 'user',
          {email: email}
        );
    }
}