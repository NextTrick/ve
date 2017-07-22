import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

import { Acl } from '../dashboard/model/entity/Acl.entity';
import { AbstractService } from '../common/service/abstract.service';

@Injectable()
export class AclService extends AbstractService {
    
    private permissions: Array<any> = [];

    path: string; 'acl';
    searchPath: string; 'acl/search';

    constructor (
        protected http: Http
    ) {
        super(http);
    }    

    isAllowed(uri: string) {
        if (this.permissions.length > 0) {
            return this.permissions.includes(uri);
        } else {
            return true;
        }
    }

    isAuthorized(currentUri: string) {                
        let isAllowed = this.isAllowed(currentUri);
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

    setPermissions(permissions: any) {        
        this.permissions = permissions;
        this.savePermissions(permissions)
    }

    savePermissions(permissions) {
        localStorage.setItem('permissions', JSON.stringify(permissions));
    }

    getPermissions() {       
        let permissions = localStorage.getItem('permissions');
        if (permissions) {
            this.permissions = JSON.parse(permissions);
        }

        return this.permissions;
    }
    
    initPermissions(token: string) {
        let params = new URLSearchParams();
        params.append('token', token);
        let options = new RequestOptions({params: params});        

        this.http.get(
            environment.backendUrl + 'acl/get-permissions', options            
        )
        .map(res => res.json())
        .subscribe(
            response => {
                this.permissions = response.data.permissions;
                console.log('permissionLogs', this.permissions);
            },
            error => console.log(error)
        );
    }

}

