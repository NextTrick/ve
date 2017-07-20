import { Component, OnInit, ElementRef, ViewEncapsulation,
         OnDestroy, ViewContainerRef } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

//thirth party modules
import { CustomValidators } from 'ng2-validation';
import { FileUploader, FileItem, ParsedResponseHeaders, FileLikeObject} from 'ng2-file-upload';

//services
import { LayoutService } from '../../service/layout.service';
import { UserService } from '../../../service/user.service';
import { AclService } from '../../../service/acl.service';
import { FormService } from '../../../common/service/form.service';
import { UtilService } from '../../../common/service/util.service';

//consts
import { message } from '../../../common/message';
import { validatorMessage } from '../../../common/validator-message';

//interfaces
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
    public filePreviewPath: SafeUrl;

    uploader:FileUploader = new FileUploader({
        url: 'http://dev.mayorix.com/api/image',        
        allowedMimeType: ['image/jpeg', 'image/png', 'image/gif'],
        allowedFileType: ['image'],
        removeAfterUpload: true,
        maxFileSize: 3 * 1024 * 1024,
    });

    formErrors = {
        name: '',
        lastName: '',
        phone: '',
        email: '',
        password: '',
        image: '',
        products: '',
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
        private aclService: AclService,
        private sanitizer: DomSanitizer,
    ) {               
    }

    ngOnInit() {        
        console.log('aclServiceLog userList', this.aclService.getPermissions());
        this.initUploader();    
        this.initForm();                
        this.layoutService.showEditBar(true); 

        this.initEmitter();      
    }

    fileChange(event) {
        // let fileList: FileList = event.target.files;           
    }

    ngAfterViewInit() {            
        // this.initJqBootstrapValidation();
                
        $("select[name='products']").select2({
            placeholder: "Productos",   
        });        
    }   

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

    

   initForm() {
        this.form = this.formBuilder.group({
            name: ['', [Validators.required]],
            lastName: [''],
            phone: [''],
            email: ['', [Validators.email, Validators.required]],
            password: ['', [Validators.required]],
            image: [''],
            active: [''],
            products: [[this.allProducts[5], this.allProducts[3]]],
        });  

        // (<FormControl>this.form.controls['allFuits'])
        //     .setValue(this.fruits[4], { onlySelf: true });     

        this.formService.initForm(this.form, this.formErrors, this.customValidatorMessages).subscribe(
            formErrors => this.formErrors = formErrors,
            error => console.log(error)
        );
    }

    onSubmit(): void {    
        console.log('subbited');  
        console.log(this.form.value);          
        this.formService.formSubmitted(); 
        if (this.uploader.queue.length > 0) {            
            this.uploader.uploadAll();            
        } else {                        
            this.createUser();
        }
    }

    createUser() {
        if (this.form.valid) {
            this.utilService.isLoading(true);
            this.userService.create(this.form.value)
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

    initUploader() {        

        this.uploader.onBeforeUploadItem = (item) => {
            item.withCredentials = false;            
        }

        this.uploader.onAfterAddingFile = (fileItem) => {
            this.formErrors.image = '';             
            this.filePreviewPath  = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(fileItem._file)));            
        } 

        this.uploader.onWhenAddingFileFailed = (item: FileLikeObject, filter: any, options: any) => {
            this.formErrors.image = '';
            switch (filter.name) {
                case 'fileSize':
                    this.formErrors.image = `Maximum upload size exceeded (${item.size} of ${options.maxFileSize} allowed)`;
                    break;
                case 'mimeType':
                    const allowedTypes = options.allowedMimeType.join();
                    this.formErrors.image = `Type "${item.type} is not allowed. Allowed types: "${allowedTypes}"`;
                    break;
                default:
                    this.formErrors.image = `Unknown error (filter is ${filter.name})`;
            }
        }

        this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {                    
            if (status == 200) {
                let res = JSON.parse(response);                
                if (res.success) {                  
                    this.userService.imageId = res.data.imageId;
                    this.createUser();
                }                
            }
        };
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

                    // _this.onSubmit(values);
                }
            });
    }    
}
