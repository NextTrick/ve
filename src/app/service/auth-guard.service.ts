import { Injectable } from '@angular/core';
import { 
    Router, CanActivate, ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService {
    constructor (
        private router: Router,
        private authService: AuthService
    ) {

    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | boolean {
        if (this.authService.isAuthenticated()) {
            return true;
        } else {
            this.router.navigate(['/dashboard/auth/login'])
            return false;
        }
    }
}