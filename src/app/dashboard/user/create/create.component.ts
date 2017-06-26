import { Component, OnInit, ElementRef, ViewEncapsulation,
         OnDestroy, ViewContainerRef } from '@angular/core';

import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { CustomValidators } from 'ng2-validation';

//services
import { LayoutService } from '../../service/layout.service';
import { UserService } from '../../../service/user.service';
import { FormService } from '../../../common/service/form.service';
import { UtilService } from '../../../common/service/util.service';

//consts
import { message } from '../../../common/message';
import { validatorMessage } from '../../../common/validator-message';

import { User } from '../../interface/user.interface';

import '../../../../assets/s/app-assets/vendors/js/forms/validation/jqBootstrapValidation.js';

@Component({
    selector: 'user-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css',
        '../../../../assets/s/app-assets/css/plugins/forms/validation/form-validation.css'],
    encapsulation: ViewEncapsulation.None
})
export class CreateComponent implements OnInit, OnDestroy {

    form: FormGroup;
    isLoading: boolean = false;
    user: User;
    validatorMessage:any = validatorMessage.es;
    mesageErr = message.success;

    formErrors = {
        name: '',
        lastName: '',
        phone: '',
        email: '',
        password: ''
    };

    customValidatorMessages = {
        es: {
            name: {

            },
            email: {
                email: '',
                required: ''
            },       
        }        
    };

    constructor(
        private elRef: ElementRef,
        private layoutService: LayoutService,
        private userService: UserService,
        private router: Router,
        private formBuilder: FormBuilder,
        private formService: FormService,
        private utilService: UtilService,
    ) {
        
    }

    ngOnInit() {              
        this.initForm();                
        this.layoutService.showEditBar(true);             
    }

    ngAfterViewInit() {            
        // this.initJqBootstrapValidation();
    }    

    initForm() {
        this.form = this.formBuilder.group({
            name: ['', [Validators.required]],
            lastName: [''],
            phone: [''],
            email: ['', [Validators.email, Validators.required]],
            password: ['', [Validators.required]]
        });       

        this.formService.initForm(this.form, this.formErrors, this.customValidatorMessages).subscribe(
            formErrors => this.formErrors = formErrors,
            error => console.log(error)
        );
    }

    onSubmit(formValue): void {                                    
        this.formService.formSubmitted(); 
        if (this.form.valid) {
            this.userService.create(this.form.value)
            .subscribe(
                response => {
                    let res = response.json();
                    if (res.success) {
                        this.utilService.successNotification();
                    } else {
                        this.utilService.errorNotification(res.data.message);
                    }                                      
                },
                error => {
                    this.utilService.errorNotification();
                    console.log(error)       
                }
            );
        }
    }

    toggleLoading() {
        this.isLoading = !this.isLoading;
    }

    ngOnDestroy() {
        this.layoutService.showEditBar(false);
    }

    initJqBootstrapValidation() {
        var _this = this;
        // $(this.elRef.nativeElement).find("input,select,textarea").not("[type=submit]")
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
