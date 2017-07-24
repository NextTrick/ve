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
import { RolService } from '../../../service/rol.service';
import { FormService } from '../../../common/service/form.service';
import { UtilService } from '../../../common/service/util.service';

//consts
import { message } from '../../../common/message';
import { validatorMessage } from '../../../common/validator-message';

//Abstract
import { AbstractEditComponent } from '../../../common/component/crud/abstract-edit.component';

// model
import { User } from '../../model/entity/user.entity';

@Component({
  selector: 'user-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent extends AbstractEditComponent implements OnInit {

    user: User = new User();   
    roles: Array<any> = []; 

    formErrors = {
        name: '',
        lastName: '',
        phone: '',
        email: '',
        password: '',
        image: '',
        rolId: '',
        products: '',
    };    

    allProducts = [
        {
            name: "Gestion",
            value: "gestion"
        }, {
            name: "El Comercio",
            value: "comercio"
        }, {
            name: "Peru 21",
            value: "peru21"        
        }, {
            name: "Trome",
            value: "trome"        
        }, {
            name: "Ojo",
            value: "ojo"
        }, {            
            name: "Autos",
            value: "auto"
        }];

    constructor(
        private elRef: ElementRef,
        private layoutService: LayoutService,
        protected userService: UserService,
        private rolService: RolService,
        protected router: Router,
        protected route: ActivatedRoute,
        protected formBuilder: FormBuilder,
        protected formService: FormService,
        protected utilService: UtilService,
        private sanitizer: DomSanitizer,
    ) {    
        super(formBuilder, formService, utilService, userService, route, router);     
    }

    ngOnInit() {        
        super.ngOnInit();        
        this.layoutService.showEditBar(true);           
    }

    initForm() {    
        this.loadRoles();

        this.form = this.formBuilder.group({
            name: ['', [Validators.required]],
            lastName: [''],
            phone: [''],
            email: ['', [Validators.email, Validators.required]],
            password: [''],
            image: [''],
            status: [''],
            rolId: ['', [Validators.required]],
            products: [[this.allProducts[5], this.allProducts[3]]],
        });       

        this.formService.initForm(this.form, this.formErrors, this.customValidatorMessages).subscribe(
            formErrors => this.formErrors = formErrors,
            error => console.log(error)
        );
    }

    loadRoles() {
        this.rolService.getActiveRoles()
            .subscribe(
                (response) => {
                    if (response.success) {
                        this.roles = response.data.roles;                                                               
                    }  else {
                        this.utilService.errorNotification();
                    }
                }
            );        
    }    

    ngOnDestroy() {
        this.layoutService.showEditBar(false);
    }

    ngAfterViewInit() {                    
        $("select[name='products']").select2({
            placeholder: "Productos",   
        });        
    }
}