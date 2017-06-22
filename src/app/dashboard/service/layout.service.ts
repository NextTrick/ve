import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class LayoutService {

    public showEditBarEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor (private http: Http) {
                
    }

    showEditBar(ifShow: boolean) {
        this.showEditBarEmitter.emit(ifShow);
    }
}