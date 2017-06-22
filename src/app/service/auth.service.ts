import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class AuthService {
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
                    this.saveToken(body.data.user.token)
                }
            }
        );
    }

    isAuthenticated() {
        //TODO: call to sever to verify
        let token = this.getToken();
        console.log('This is the TOKEN' +  token);
        if (token == null) {
            return false;
        }

        return true;
    }

    saveToken(token) {
        localStorage.setItem('tsMyxToken', token);
    }

    getToken() {
        return localStorage.getItem('tsMyxToken');
    }

    recoverPassword(email:string) {
        return this.http.post(
          environment.backendUrl + 'user',
          {email: email}
        );
    }
}