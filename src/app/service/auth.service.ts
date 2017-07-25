import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class AuthService {  
    
    private rolAdminId = 1;   

    constructor (
        private http: Http,        
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
                    let token = response.data.token                    
                    let permissions = response.data.permissions;
                    let authUser = response.data.user;
                    this.saveAuthData({
                        token: token,
                        permissions: permissions,
                        user: authUser,                                              
                    });                    
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
                    let authUser = response.data.user;
                    this.saveAuthData({
                        token: token,
                        permissions: permissions,
                        user: authUser,                                              
                    });

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

    logout() {
        this.removeAuthData();
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

    getToken() {
        return this.getAuthData('token');
    }

    removeAuthData() {
        localStorage.removeItem('authData');        
    }

    recoverPassword(email:string) {
        return this.http.post(
          environment.backendUrl + 'user',
          {email: email}
        );
    }

    getAuthUser(): any {
        return this.getAuthData('user');
    }

    isAllowed(uri: string) {
        let permissions = this.getPermissions();        
        if (permissions.length > 0) {
            return permissions.includes(uri);
        } else {
            return true;
        }
    }

    isAuthorized(currentUri: string) {                
        let isAllowed = this.isAllowed(currentUri);        

        if (this.getAuthUser().rolId == this.rolAdminId) {
            return true;
        }

        console.log('currentURiLOg', currentUri, isAllowed);
        if (!isAllowed) {
            let resources = this.getPermissions();
            let foundUri = resources.find(uri => {
                return currentUri.indexOf(uri) > -1;
            });

            if (foundUri !== undefined) {
                isAllowed = this.isAllowed(foundUri);   
            }
        }     

        return isAllowed;                
    }

    getPermissions(): Array<any> {       
        let permissions =  this.getAuthData('permissions');

        return permissions;
    }    

    saveAuthData(authData) {        
        localStorage.setItem('authData', JSON.stringify(authData));
    }

    getAuthData(prop: string = '') : any  {
        let authData: any = localStorage.getItem('authData');
        let response: any = null;

        if (authData) {
            authData = JSON.parse(authData);            

            if (prop == '') {
                response = authData;
            } else {
                for (let p in authData) {
                    if (p == prop) {
                        response = authData[p];
                        break;
                    }
                }
            }
        }

        return response;
    }

    // initPermissions(token: string) {
    //     let params = new URLSearchParams();
    //     params.append('token', token);
    //     let options = new RequestOptions({params: params});        

    //     this.http.get(
    //         environment.backendUrl + 'acl/get-permissions', options            
    //     )
    //     .map(res => res.json())
    //     .subscribe(
    //         response => {
    //             this.permissions = response.data.permissions;
    //             console.log('permissionLogs', this.permissions);
    //         },
    //         error => console.log(error)
    //     );
    // } 

}