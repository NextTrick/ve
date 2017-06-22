import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class UserService {
    
    constructor (private http: Http) {

    }

    
}