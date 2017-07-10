import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class AuthService {
    constructor (private http: Http) {

    }

    signup(companyName: string, email: string, password: string) {
        return this.http.post(
            environment.backendUrl + 'auth/signup',
            {companyName: companyName, email: email, password: password}
        )
        .map(response => response.json()) 
        .do(
            (response) => {                
                if (response.success) {
                    this.saveToken(response.data.token);
                }
            }
        );
    }

    login(email: string, password: string, remember: string) {        
        return this.http.post(
            environment.backendUrl + 'auth/login',
            {email: email, password: password}
        )
        .map(res => res.json())
        .do(
            (response) => {                
                if (response.success) {
                    this.saveToken(response.data.token);
                    if (remember == 'on') {
                        this.saveRemember(email);
                    } else {
                        this.removeRemember();
                    }
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

    saveRemember(email: string) {
        localStorage.setItem('rememberEmail', email);
    }

    removeRemember() {
        localStorage.removeItem('rememberEmail');
    }

    getRemember():any {
        let email = localStorage.getItem('rememberEmail');
        if (email == null) {
            return null;
        }
        return email;
    }

    saveToken(token) {
        localStorage.setItem('token', token);
    }

    getToken() {
        return localStorage.getItem('token');
    }

    recoverPassword(email:string) {
        return this.http.post(
          environment.backendUrl + 'user',
          {email: email}
        );
    }
}