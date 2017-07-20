import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

import { AclService } from './acl.service';

@Injectable()
export class AuthService {
    constructor (
        private http: Http,
        private aclService: AclService,
    ) {
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
                    let token = response.data.token
                    let permissions = response.data.permissions;
                    this.saveToken(token);
                    this.aclService.setPermissions(permissions);
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