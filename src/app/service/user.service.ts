import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

import { User } from '../dashboard/interface/user.interface';

@Injectable()
export class UserService {
    
    constructor (private http: Http) {

    }

    create(user: User) {            
        return this.http.post(
                environment.backendUrl + 'user',
                {user}        
        )
    }

    getAll(filter: any) {
        let myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');    
        
        let myParams = new URLSearchParams();
        myParams.append('pageIndex', filter.pageIndex);
        myParams.append('pageSize', filter.pageSize);
        if (filter.sortField) {
            myParams.append('sortField', filter.sortField);	
        }

        if (filter.sortOrder) {
            myParams.append('sortOrder', filter.sortOrder);	
        }
        let options = new RequestOptions({params: myParams});

        return this.http.get(
            environment.backendUrl + 'user', options
        )
        .map(res => res.json());
    }
}

