import { Component, OnInit, ElementRef, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { AuthService } from '../../../service/auth.service';
import { User } from '../../../interface/user.interface';

import { MESSAGE } from '../../../common/message';

import '../../../../assets/s/app-assets/vendors/js/forms/validation/jqBootstrapValidation.js';

@Component({
    selector: 'auth-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css',
        '../../../../assets/s/app-assets/css/plugins/forms/validation/form-validation.css'],
    encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

    form: FormGroup;
    showErrorMsg: boolean = false;
    alertMsg: string = MESSAGE.success;

    constructor(
        private elRef: ElementRef,
        private authService: AuthService,
        private formBuilder: FormBuilder,
        private router: Router
    ) {
        this.form = this.formBuilder.group({
            password: [''],
            email: ['']
        });
    }

    ngOnInit() {
        this.initJqBootstrapValidation();
    }

    onSubmit(formValue: any): void {    
        this.authService.login(
            formValue.email,
            formValue.password
        )
        .subscribe(
            response => {
                console.log(response)
                if (response.ok) {
                    let body = response.json();
                    if (body.success) {
                        this.router.navigate(['/dashboard']);
                    } else {
                        this.showErrorMsg = true;
                        this.alertMsg = body.message;
                    }
                } else {
                    this.showErrorMsg = true;
                }
            },
            error => {
                this.showErrorMsg = true;
                console.log(error)
            }
        );
    }

    initJqBootstrapValidation() {
        var _this = this;        
        $(this.elRef.nativeElement).find("input,select,textarea").not("[type=submit]")
            .jqBootstrapValidation({
                preventSubmit: true,
                submitError: function ($form, event, errors) {
                },
                submitSuccess: function ($form, event) {
                    console.log('form' + $form.serializeArray());
                    var values = {};
                    $.each($form.serializeArray(), function (i, field) {
                        values[field.name] = field.value;
                    });
                    console.log(values);

                    _this.onSubmit(values);
                }
            });
    }
}
