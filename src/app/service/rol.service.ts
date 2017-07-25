import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

import { Rol } from '../dashboard/model/entity/rol.entity';
import { AbstractService } from '../common/service/abstract.service';

@Injectable()
export class RolService extends AbstractService {
    path: string =  'rol';
    searchPath: string = 'rol/search'; 

    getActiveRoles() {
        return this.http.get(
            environment.backendUrl + this.path + '/get-active-roles', this.getTokenAsOption()
        )
        .map(res => res.json());
    }
}

