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
import { RolService } from '../../../../service/rol.service';
import { AclService } from '../../../../service/acl.service';
import { FormService } from '../../../../common/service/form.service';
import { UtilService } from '../../../../common/service/util.service';

//consts
import { message } from '../../../../common/message';

import { Rol } from '../../../model/entity/rol.entity';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css',
        '../../../../../assets/s/app-assets/css/plugins/forms/validation/form-validation.css'],
    encapsulation: ViewEncapsulation.None
})
export class EditComponent implements OnInit {

    form: FormGroup;
    isLoading: boolean = false;
    rol =  new Rol();

    formErrors = {
        name: '',
        status: '',
    };

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        private layoutService: LayoutService,
        private rolService: RolService,
        private formService: FormService,
        private utilService: UtilService,
        private aclService: AclService,
    ) { }

    ngOnInit() {
        let id = this.route.snapshot.params['id'];
        this.utilService.isLoading(true);
        this.rolService.get(id)
            .finally(() => this.utilService.isLoading(false))
            .subscribe(
            response => {
                if (response.success) {
                    this.rol = response.data.rol;
                    this.populateForm();
                } else {
                    this.utilService.errorNotification(response.data.message);
                }
            },
            error => {
                this.utilService.errorNotification();
                this.router.navigate(['/not-found']);
            }
            );

        this.initForm();
        this.initEmitter();
    }

    populateForm() {
        for (let prop in this.rol) {
            let control = this.form.get(prop);
            if (control) {
                console.log(prop);
                if (prop == 'status') {
                    if (this.rol[prop] == 0) {
                        control.setValue(false);
                    } else {
                        control.setValue(true);
                    }             
                } else {
                    control.setValue(this.rol[prop]);
                }                
            }
        }
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

    onSubmit(): void {
        this.formService.formSubmitted();
        if (this.form.valid) {
            this.utilService.isLoading(true);
            this.rolService.update(this.rol.rolId, this.form.value)
                .finally(() => this.utilService.isLoading(false))
                .subscribe(
                response => {
                    if (response.success) {
                        this.utilService.successNotification();
                        this.initForm();
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

    initEmitter() {
        this.utilService.isLoadingEmitter.subscribe(
            isLoading => {
                this.isLoading = isLoading;
            }
        );
    }
}
