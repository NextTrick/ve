import { Component, OnInit, ElementRef, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

//thirth party modules
import { CustomValidators } from 'ng2-validation';

//Services
import { AuthService } from '../../../service/auth.service';
import { FormService } from '../../../common/service/form.service';
import { UtilService } from '../../../common/service/util.service';

import { message } from '../../../common/message';

import '../../../../assets/s/app-assets/vendors/js/forms/validation/jqBootstrapValidation.js';

@Component({
    selector: 'auth-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css',
        '../../../../assets/s/app-assets/css/plugins/forms/validation/form-validation.css'],
    encapsulation: ViewEncapsulation.None
})
export class SignupComponent implements OnInit {

    form: FormGroup;
    showErrorMsg: boolean = false;
    alertMsg: string = message.success;

    formErrors = {
        email: '',
        password: '',        
        companyName: '',
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
    }

    initForm() {
        this.form = this.formBuilder.group({
            companyName: ['', [Validators.required]],
            password: ['', [Validators.required]],
            email: ['', [Validators.email, Validators.required]]
        });

        this.formService.initForm(this.form, this.formErrors).subscribe(
            formErrors => this.formErrors = formErrors,
            error => console.log(error)
        );
    }       

    onSubmit(): void {
        if (this.form.valid) {
            this.authService.signup(
                this.form.value.companyName,
                this.form.value.email,
                this.form.value.password
            )
            .subscribe(
                response => {                                                    
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
                }
            );
        }        
    }

}
