import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

//thirth party modules
import { CustomValidators } from 'ng2-validation';

//services
import { FormService } from '../../../common/service/form.service';
import { UtilService } from '../../../common/service/util.service';

//consts
import { message } from '../../../common/message';

export abstract class AbstractCreateComponent {

    form: FormGroup;
    isLoading: boolean = false;
    
    abstract formErrors = {};
    customValidatorMessages = {};

    constructor(
        protected formBuilder: FormBuilder,
        protected formService: FormService,
        protected utilService: UtilService,
        protected objectService: any
    ) {
        this.initEmitter();
    }

    abstract initForm(): void;

    initFormService() {
        this.formService.initForm(this.form, this.formErrors,this.customValidatorMessages).subscribe(
            formErrors => this.formErrors = formErrors,
            error => console.log(error)
        );
    }

    onSubmit(): void {
        this.formService.formSubmitted();
        if (this.form.valid) {
            this.utilService.isLoading(true);
            this.objectService.create(this.form.value)
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
