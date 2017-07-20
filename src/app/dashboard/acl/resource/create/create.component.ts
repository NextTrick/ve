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
import { ResourceService } from '../../../../service/resource.service';
import { FormService } from '../../../../common/service/form.service';
import { UtilService } from '../../../../common/service/util.service';

//Abstract
import { AbstractCreateComponent } from '../../../../common/component/crud/abstract-create.component';

@Component({
    selector: 'resource-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css',
        '../../../../../assets/s/app-assets/css/plugins/forms/validation/form-validation.css'],
    encapsulation: ViewEncapsulation.None
})
export class CreateComponent extends AbstractCreateComponent implements OnInit {

    formErrors = {
        uri: '',
        name: '',
        status: '',    
    };

    constructor(
        protected formBuilder: FormBuilder,
        protected formService: FormService,
        protected utilService: UtilService,                   
        private layoutService: LayoutService,
        private resourceService: ResourceService,         
    ) { 
        super(formBuilder, formService, utilService, resourceService);
    }

    ngOnInit() {                   
        this.initForm();                                       
    }

    initForm() {
        this.form = this.formBuilder.group({
            uri: ['', [Validators.required]],   
            name: ['', [Validators.required]],                     
            status: [true],       
        });

        this.formService.initForm(this.form, this.formErrors).subscribe(
            formErrors => this.formErrors = formErrors,
            error => console.log(error)
        );
    }
}