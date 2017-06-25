import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
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
        );
    }
}