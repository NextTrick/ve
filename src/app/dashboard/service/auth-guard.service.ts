import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { 
    Router, CanActivate, ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

import { AuthService } from './auth.service';
import { AclService } from './acl.service';

@Injectable()
export class AuthGuardService {
    constructor (
        private location: Location,
        private router: Router,
        private authService: AuthService
    ) {

    }

    canActivate(        
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | boolean {   
        console.log('ActivatedRouteSnapshot Auth', route.routeConfig);                   
        if (this.authService.isAuthenticated()) {            
            return true;
        } else {
            this.router.navigate(['/dashboard/auth/login'])
            return false;
        }
    }
}