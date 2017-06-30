import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Component, OnInit, ElementRef, ViewEncapsulation,
         OnDestroy, ViewContainerRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

//thirth party modules
import { CustomValidators } from 'ng2-validation';

//services
import { LayoutService } from '../../service/layout.service';
import { UserService } from '../../../service/user.service';
import { FormService } from '../../../common/service/form.service';
import { UtilService } from '../../../common/service/util.service';

//consts
import { message } from '../../../common/message';
import { validatorMessage } from '../../../common/validator-message';

//interfaces
// import { User } from '../../interface/user.interface';

// model
import { User } from '../../model/entity/user.entity';

@Component({
  selector: 'user-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  form: FormGroup;
    isLoading: boolean = false;
    user: User = new User();
    validatorMessage:any = validatorMessage.es;
    mesageErr = message.success;    

    formErrors = {
        name: '',
        lastName: '',
        phone: '',
        email: '',
        password: '',
        image: ''
    };

    customValidatorMessages = {};

    constructor(
        private elRef: ElementRef,
        private layoutService: LayoutService,
        private userService: UserService,
        private router: Router,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        private formService: FormService,
        private utilService: UtilService,
        private sanitizer: DomSanitizer,
    ) {               
    }

    ngOnInit() {                           
        let userId = this.route.snapshot.params['id'];
        this.utilService.isLoading(true);
        this.userService.get(userId)
            .finally(() => this.utilService.isLoading(false))
            .subscribe(
                response => {
                    if (response.success) {
                        this.user = response.data.user;                       
                        this.populateForm();                 
                    } else {
                        this.utilService.errorNotification()
                    }
                }, 
                error => {                
                    this.utilService.errorNotification()
                    this.router.navigate(['/not-found']);
                }
            );   

        this.initForm();        
        this.layoutService.showEditBar(true);   
        this.initEmitter();                        
    }

    populateForm() {
        this.form.get('name').setValue(this.user.name); 
        this.form.get('lastName').setValue(this.user.lastName); 
        this.form.get('phone').setValue(this.user.phone); 
        this.form.get('email').setValue(this.user.email);    

        // Object.keys(this.user).forEach(k => {
        //     let control = this.form.get(k);
        //     if (control)
        //         // control.setValue(this.user[k], {onlySelf:true});
        //         control.setValue(this.user[k]);
        //     }
        // );
    }

    initForm() {        
        this.form = this.formBuilder.group({
            name: ['', [Validators.required]],
            lastName: [''],
            phone: [''],
            email: ['', [Validators.email, Validators.required]],
            password: [''],
            image: [''],
        });       

        this.formService.initForm(this.form, this.formErrors, this.customValidatorMessages).subscribe(
            formErrors => this.formErrors = formErrors,
            error => console.log(error)
        );
    }

    onSubmit(): void {    
        console.log('subbited');    
        this.formService.formSubmitted();                             
        this.updateUser();        
    }

    updateUser() {
        if (this.form.valid) {

            this.user.name = this.form.value.name;
            this.user.lastName = this.form.value.lastName;
            this.user.email = this.form.value.email;
            this.user.password = this.form.value.password;

            this.utilService.isLoading(true);

            this.userService.update(this.user)
                .finally(() => this.utilService.isLoading(false))
                .subscribe(
                    response => {                    
                        if (response.success) {
                            this.utilService.successNotification();                        
                        } else {
                            this.utilService.errorNotification(response.data.message);
                        }                                      
                    },
                    error => {
                        this.utilService.errorNotification();
                        console.log(error)       
                    }
                );
        }
    }    

    ngOnDestroy() {
        this.layoutService.showEditBar(false);
    }        

    initEmitter() {
        this.utilService.isLoadingEmitter.subscribe(
            isLoading => {
                this.isLoading = isLoading;
            }
        );
    }
}