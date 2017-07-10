import { Component, OnInit, ElementRef, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import { AuthService } from '../../../service/auth.service';

import { message } from '../../../common/message';

import '../../../../assets/s/app-assets/vendors/js/forms/validation/jqBootstrapValidation.js';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css',
              '../../../../assets/s/app-assets/css/plugins/forms/validation/form-validation.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecoverPasswordComponent implements OnInit {

  form: FormGroup;  

  constructor(
    private elRef:ElementRef,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      email: ['']
    });
  }

  ngOnInit() {
    this.updateBodyClass();
    var _this= this;

    $(this.elRef.nativeElement).find("input,select,textarea").not("[type=submit]").jqBootstrapValidation({
      preventSubmit: true,
      submitSuccess: function ($form, event) {
        var values = {};
        $.each($form.serializeArray(), function(i, field) {
          values[field.name] = field.value;
        });
        console.log(values);

        _this.onSubmit(values);
      }
    });
  }

  onSubmit(formValue:any):void {
    this.authService.recoverPassword(
      formValue.email
    )
      .subscribe(
        response => console.log(response),
        error => console.log(error)
      );
  }

  updateBodyClass()
  {
    // let body = document.getElementsByTagName('body')[0];
    // body.setAttribute("data-col", "1-column");
    // body.classList.remove("2-columns", 'fixed-navbar');
    // body.classList.add("1-column", "blank-page");
  }
}
