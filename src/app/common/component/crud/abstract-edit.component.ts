import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

//thirth party modules
import { CustomValidators } from 'ng2-validation';

//services
import { FormService } from '../../../common/service/form.service';
import { UtilService } from '../../../common/service/util.service';

//consts
import { message } from '../../../common/message';

export abstract class AbstractEditComponent {

    form: FormGroup;
    isLoading: boolean = false;
    
    abstract formErrors = {};
    customValidatorMessages = {};
    objectEntity: any = {};     

    constructor(
        protected formBuilder: FormBuilder,
        protected formService: FormService,
        protected utilService: UtilService,
        protected objectService: any,
        protected route: ActivatedRoute,
        protected router: Router,        
    ) {
        this.initEmitter();
    }

    abstract initForm(): void;

    ngOnInit() {  
        this.initForm();      
        this.initData();    
    }   

    initData() {
        let id = this.route.snapshot.params['id'];
        this.utilService.isLoading(true);
        this.objectService.get(id)
            .finally(() => this.utilService.isLoading(false))
            .subscribe(
            response => {
                    if (response.success) {
                        this.objectEntity = response.data.object;                        
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
    }

    populateForm() {
        for (let prop in this.objectEntity) {
            let control = this.form.get(prop);
            if (control) {                            
                if (prop == 'status') {
                    if (this.objectEntity[prop] == 0 || this.objectEntity[prop] == '0') {
                        control.setValue(false);
                    } else {
                        control.setValue(true);
                    }             
                } else {
                    control.setValue(this.objectEntity[prop]);
                }                
            }
        }
    }

    onSubmit(): void {
        this.formService.formSubmitted();
        console.log('this.objectEntityLog', this.objectEntity);
        if (this.form.valid) {
            this.utilService.isLoading(true);
            this.objectService.update(this.objectEntity.id, this.form.value)
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

    initFormService() {
        this.formService.initForm(this.form, this.formErrors,this.customValidatorMessages).subscribe(
            formErrors => this.formErrors = formErrors,
            error => console.log(error)
        );
    }    

    initEmitter() {
        this.utilService.isLoadingEmitter.subscribe(
            isLoading => {
                this.isLoading = isLoading;
            }
        );
    }
    
    setObject(objectEntity: any) {
        this.objectEntity = objectEntity;
    }
}
