import { Component, OnInit, ElementRef, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";

//thirth party modules
import { CustomValidators } from 'ng2-validation';

//Services
import { AuthService } from '../../../service/auth.service';
import { FormService } from '../../../common/service/form.service';
import { UtilService } from '../../../common/service/util.service';

import { User } from '../../../interface/user.interface';

import { message } from '../../../common/message';

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
    alertMsg: string = message.success;

    formErrors = {        
        password: '',
        email: ''
    }

    constructor(
        private elRef: ElementRef,
        private authService: AuthService,
        private formBuilder: FormBuilder,
        private router: Router,
        private utilService: UtilService,
        private formService: FormService
    ) {        
           
    }

    ngOnInit() {
        this.initForm();
        // this.initJqBootstrapValidation();
    }

    initForm() {
        let rememberEmail = this.authService.getRemember();
        var remember = '';
        var email = '';
        if (rememberEmail) {
            remember = 'on';
            email = rememberEmail;
        }

        this.form = this.formBuilder.group({
            password: ['', [Validators.required]],
            email: [email, [Validators.email, Validators.required]],
            remember: [remember]
        });     

        this.formService.initForm(this.form, this.formErrors).subscribe(
            formErrors => this.formErrors = formErrors,
            error => console.log(error)
        );
    }

    onSubmit(): void {           
        this.formService.formSubmitted(); 
        if (this.form.valid) { 
            let remember = 'off';        
            if (this.form.value.remember) {
                remember = this.form.value.remember;
            } 
            this.authService.login(
                this.form.value.email,
                this.form.value.password,
                remember
            )
            .subscribe(
                response => {    
                    console.log(response);                
                    if (response.success) {
                        this.router.navigate(['/dashboard']);
                    } else {                        
                        this.showErrorMsg = true;
                        this.alertMsg = response.message;                        
                    }                               
                },
                error => {
                    this.showErrorMsg = true;
                    this.alertMsg =  message.error;
                    console.log(error)                    
                }
            );
        }
    }

    resetForm() {
        this.form.get('email').setValue('');
        this.form.get('password').setValue('');        
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

                    // _this.onSubmit(values);
                }
            });
    }
}
