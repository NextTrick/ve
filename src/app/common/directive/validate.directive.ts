import {Directive, Renderer, Renderer2, ElementRef, Input} from '@angular/core';

import { FormService } from '../service/form.service';

@Directive({selector: '[validate]'})
export class ValidateDirective {
    private nativeElement : Node;

    constructor(
        private el: ElementRef,
        private renderer: Renderer,
        private renderer2: Renderer2,
        private formService: FormService
    ) {        
        this.nativeElement = this.el.nativeElement;
    }
    ngAfterViewInit() {    
        let formControlElement = this.el.nativeElement.querySelector(".form-control");            
        let elName = formControlElement.getAttribute('name');    

        this.formService.formValidationEmitter.subscribe(            
            formErrors => {                        
                if (formErrors[elName]) {                                                                             
                    this.el.nativeElement.classList.add("error");
                } else {                  
                    this.el.nativeElement.classList.remove("error");                    
                }                    
            },
            error => console.log('Error on validate directive', error)
        );  
    }
}
