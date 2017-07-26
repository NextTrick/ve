import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

import { Acl } from '../model/entity/Acl.entity';
import { AbstractService } from '../../common/service/abstract.service';

@Injectable()
export class AclService extends AbstractService {
    
    path: string = 'acl';
    searchPath: string = 'acl/search';
    
}

