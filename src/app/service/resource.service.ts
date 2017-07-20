import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

import { Resource } from '../dashboard/model/entity/resource.entity';
import { AbstractService } from '../common/service/abstract.service';

@Injectable()
export class ResourceService extends AbstractService {
    path: string =  'resource';
    searchPath: string = 'resource/search'; 
}

