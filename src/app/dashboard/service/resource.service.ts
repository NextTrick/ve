import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

import { Resource } from '../model/entity/resource.entity';
import { AbstractService } from './abstract.service';

@Injectable()
export class ResourceService extends AbstractService {
    path: string =  'resource';
    searchPath: string = 'resource/search';    

    getAllByRol(filter) {        
        let myParams = new URLSearchParams();
        for (let prop in filter) {
            if (prop == 'extra') {
                 filter[prop].forEach((value) => {
                    for (let subProp in value) {
                        myParams.append(subProp, value[subProp]);        
                    }    
                });
            } else {
                myParams.append(prop, filter[prop]);
            }            
        }
        
        let options = new RequestOptions({params: myParams});

        return this.httpService.get(
            environment.backendUrl + this.path + '/get-all-by-rol', options
        )
        .map(res => res.json());
    }
}

