import {
    Component,
    OnInit,
    ViewEncapsulation
} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

//thirth party modules
import { CustomValidators } from 'ng2-validation';

//services
import { LayoutService } from '../../../service/layout.service';
import { RolService } from '../../../../service/rol.service';
import { FormService } from '../../../../common/service/form.service';
import { UtilService } from '../../../../common/service/util.service';

//Abstract
import { AbstractCreateComponent } from '../../../../common/component/crud/abstract-create.component';

@Component({
    selector: 'rol-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css',
        '../../../../../assets/s/app-assets/css/plugins/forms/validation/form-validation.css'],
    encapsulation: ViewEncapsulation.None
})
export class CreateComponent extends AbstractCreateComponent implements OnInit {

    formErrors = {
        name: '',
        status: '',    
    };

    constructor(
        protected formBuilder: FormBuilder,
        protected formService: FormService,
        protected utilService: UtilService,                   
        private layoutService: LayoutService,
        private rolService: RolService,         
    ) { 
        super(formBuilder, formService, utilService, rolService);
    }

    ngOnInit() {                    
        this.initForm();                                       
    }

    initForm() {
        this.form = this.formBuilder.group({
            name: ['', [Validators.required]],            
            status: [true],       
        });

        this.formService.initForm(this.form, this.formErrors).subscribe(
            formErrors => this.formErrors = formErrors,
            error => console.log(error)
        );
    }

    // onSubmit(): void {                            
    //     this.formService.formSubmitted();
    //     if (this.form.valid) {
    //         this.utilService.isLoading(true);
    //         this.rolService.create(this.form.value)
    //             .finally(() => this.utilService.isLoading(false))
    //             .subscribe(
    //                 response => {                    
    //                     if (response.success) {
    //                         this.utilService.successNotification();
    //                         this.initForm();
    //                     } else {
    //                         this.utilService.errorNotification(response.data.message);
    //                     }                                                          
    //                 },
    //                 error => {
    //                     this.utilService.errorNotification();                    
    //                     console.log(error)       
    //                 }
    //             );
    //     }
    // }

    // initEmitter() {
    //     this.utilService.isLoadingEmitter.subscribe(
    //         isLoading => {
    //             this.isLoading = isLoading;
    //         }
    //     );
    // }

}
