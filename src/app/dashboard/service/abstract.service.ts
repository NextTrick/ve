import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

import { AuthService } from '../../dashboard/service/auth.service';
import { HttpService } from './../../common/service/http.service';

@Injectable()
export class AbstractService {

    path: string; '';
    searchPath: string; '';

    constructor (        
        protected authService: AuthService,
        protected httpService: HttpService,
        protected http?: Http,
    ) {
        httpService.setAuthObjectService(authService);
    }

    create(data: any) {        
        return this.httpService.post(
                environment.backendUrl + this.path,
                {data}
            )
            .map(res => res.json());            
    }

    update(id: number, data: any) {        
        return this.httpService.put(
                environment.backendUrl + this.path + '/' + id,
                {data}
            )
            .map(res => res.json());            
    }

    delete(id: number) {        
        return this.httpService.delete(
            environment.backendUrl + this.path + '/' + id
        )
        .map(res => res.json());
    }

    getAll(objectParams: Object = {}) {
        let myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');    
        
        let myParams = new URLSearchParams();

        for (let prop in objectParams) {
            if (prop == 'extra') {
                 objectParams[prop].forEach((value) => {
                    for (let subProp in value) {
                        myParams.append(subProp, value[subProp]);        
                    }    
                });
            } else {
                myParams.append(prop, objectParams[prop]);
            }            
        }
        
        let options = new RequestOptions({params: myParams});

        return this.httpService.get(
            environment.backendUrl + this.path, options
        )
        .map(res => res.json());
        // .map(res => { 
        //     console.log('responseLog', res);
        //     return res.json() 
        //     }
        // )
        // .catch(error => { 
        //         console.log('Captured by catch', error); 
        //         throw 'error in source. Details: ';             
        //     }
        // );
    }

    get(id: number) {
        return this.httpService.get(
            environment.backendUrl + this.path + '/' + id
        )
        .map(res => res.json());
    }

    search(filter: any) {    
        let myParams = new URLSearchParams();

        myParams.append('s', filter.s);           
        myParams.append('pageSize', filter.pageSize);        

        let options = new RequestOptions({params: myParams});

        return this.httpService.get(
            environment.backendUrl + this.searchPath, options
        )
        .map(res => res.json());
    }    

    getTokenAsOption() {
        let myParams = new URLSearchParams();
        myParams.append('token', this.getToken());

        return new RequestOptions({params: myParams});
    }

    getToken() {
        let token = this.authService.getToken();    
            
        return token;
    }
}

