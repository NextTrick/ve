import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class FormService {
    lang: string = 'es';    
    form: FormGroup;
    formErrors: any;
    customValidatorMessages: any;
    submittedInvalid = false;

    public formValidationEmitter: EventEmitter<any> = new EventEmitter<any>();

    validationMessages = {
        en: {
            required: 'This field is required.',
            pattern: 'The input value does not match the pattern required.',
            email: 'Invalid email.',
            minLength: 'Minimum length is {0}.',
            maxLength: 'Maximum length is {0}.',
            minNumber: 'Minimal value is {0}.',
            maxNumber: 'Maximal value is {0}.',
            noEmpty: 'Only blank spaces are not allowed.',
            rangeLength: 'The input must be between {0} and {1} symbols long.',
            range: 'The input must be between {0} and {1}.',
            digit: 'The input must be a number.',
            equal: 'The input must be equal to {0}.',
            url: 'The input must be a valid URL.',
            date: 'The input must be a valid date.',
            areEqual: 'The input values in the group must match.',
            passwords: 'Both fields "Password" and "Confirm Password" must match.',
            unknownError: 'Unknown Error.',
        },
        es: {
            required: 'Este campo es requerido.',
            pattern: 'El valor ingreso no es correcto.',
            email: 'Email inválido.',
            minLength: 'El tamaño mínimo es {0}.',
            maxLength: 'El tamaño máximo es {0}.',
            minnumber: 'El valor mínimo es {0}.',
            maxnumber: 'El valor máximo es {0}.',
            noempty: 'Este campo no puede ser vacío.',
            rangeLength: 'El valor debe tener entre {0} y {1} caracteres',
            range: 'El valor debe estar entre {0} y {1}.',
            digit: 'El valor debe ser un número.',
            equal: 'El valor debe ser igual a {0}.',
            url: 'El valor debe ser una URL válida.',
            date: 'El valor debe ser una fecha.',
            areequal: 'Los valores del grupo no son iguales.',
            passwords: 'El valor de "Password" y "Confirmar Password" deben ser iguales.',
            unknownerror: 'El valor ingresado no es correcto..', //Error desconocido.
        }
    };

    constructor() {

    }

    initForm(form: FormGroup, formErrors: any, customValidatorMessages: any) {
        this.form = form;
        this.formErrors = formErrors;
        this.customValidatorMessages = customValidatorMessages;

        this.form.valueChanges.subscribe(data => this.validateForm());
        
        return this.formValidationEmitter;
    }

    formSubmitted() {
        if (this.form.valid) {
            this.submittedInvalid = false;
        } else {
            this.submittedInvalid = true;
        }
        
        this.validateForm();
    }

    validateForm() {
        for (let field in this.formErrors) {
            // clear that input field errors
            this.formErrors[field] = '';

            // grab an input field by name
            let input = this.form.get(field);            

            if (input.invalid && input.dirty || this.submittedInvalid) {
                // figure out the type of error
                // loop over the formErrors field names
                for (let error in input.errors) {                                                          
                    // assign that type of error message to a variable  

                    if (this.customValidatorMessages[this.lang] && this.customValidatorMessages[this.lang][field] &&
                        this.customValidatorMessages[this.lang][field][error]) {
                        this.formErrors[field] = this.customValidatorMessages[this.lang][field][error];
                    } else if (this.validationMessages[this.lang][error]) {
                        this.formErrors[field] = this.validationMessages[this.lang][error];                        
                    } else {
                        console.log('error does not exists', error, field);
                        this.formErrors[field] = this.validationMessages[this.lang]['unknownerror'];
                    }
                    
                }
            }
        }
        console.log(this.formErrors);
        this.formValidationEmitter.emit(this.formErrors);

    }

}