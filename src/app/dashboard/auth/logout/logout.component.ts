import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Services
import { AuthService } from '../../../service/auth.service';

@Component({
    selector: 'auth-logout',
    template: '',
})
export class LogoutComponent implements OnInit {

    constructor(
        protected authService: AuthService,
        protected router: Router
    ) { }

    ngOnInit() {
        this.authService.logout();
        this.router.navigate(['/dashboard/auth']);
    }

}
