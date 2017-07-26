import {
    Component,
    OnInit,
    ViewEncapsulation
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

//thirth party modules
import { CustomValidators } from 'ng2-validation';

//services
import { LayoutService } from '../../../service/layout.service';
import { ResourceService } from '../../../service/resource.service';
import { AclService } from '../../../service/acl.service';
import { FormService } from '../../../../common/service/form.service';
import { UtilService } from '../../../../common/service/util.service';

//Entities
import { Resource } from '../../../model/entity/resource.entity';

//Abstract
import { AbstractEditComponent } from '../../../../common/component/crud/abstract-edit.component';

@Component({
    selector: 'resource-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css',
        '../../../../../assets/s/app-assets/css/plugins/forms/validation/form-validation.css'],
    encapsulation: ViewEncapsulation.None
})
export class EditComponent extends AbstractEditComponent implements OnInit {
        
    formErrors = {
        name: '',
        uri: '',
        status: '',
    };

    resource: Resource = new Resource();    

    constructor(
        protected formBuilder: FormBuilder,
        protected formService: FormService,
        protected router: Router,
        protected route: ActivatedRoute,
        protected utilService: UtilService,                           
        private layoutService: LayoutService,
        private resourceService: ResourceService,                     
        private aclService: AclService,
    ) { 
        super(formBuilder, formService, utilService, resourceService, route, router);
        this.setObject(this.resource);
    }

    ngOnInit() {
        super.ngOnInit();
    }

    initForm() {
        this.form = this.formBuilder.group({
            name: ['', [Validators.required]],
            uri: ['', [Validators.required]],
            status: [true],
        });

        this.formService.initForm(this.form, this.formErrors).subscribe(
            formErrors => this.formErrors = formErrors,
            error => console.log(error)
        );
    }
}
