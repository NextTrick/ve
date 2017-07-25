import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { 
    Router, CanActivate, ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

import { AuthService } from './auth.service';

@Injectable()
export class AclGuardService {
    constructor (
        private location: Location,
        private router: Router,
        private authService: AuthService,        
    ) {

    }

    canActivate(        
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | boolean {              
        let uri = this.location.path();            
        let path = route.routeConfig.path; 
        
        if (this.authService.isAuthenticated()) {            
            if (this.authService.isAuthorized(uri)) {                
                return true;
            } else {
                this.router.navigate(['/access-denied']);    
            }                                               
        } else {
            this.router.navigate(['/dashboard/auth/login']);
        }
    }
}