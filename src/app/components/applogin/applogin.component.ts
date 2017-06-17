import { Component, OnInit, ElementRef, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user.interface';

import { MESSAGE } from '../../commons/message';

import '../../../assets/s/app-assets/vendors/js/forms/validation/jqBootstrapValidation.js';

@Component({
  selector: 'app-applogin',
  templateUrl: './applogin.component.html',
  styleUrls: ['./applogin.component.css',
              '../../../assets/s/app-assets/css/plugins/forms/validation/form-validation.css'],
  encapsulation: ViewEncapsulation.None
})
export class ApploginComponent implements OnInit {

  form:FormGroup;
  showErrorMsg:boolean = false;
  alertMsg:string = MESSAGE.success;

  user:User = {
    companyName: '',
    email: '',
    password: ''
  };

  constructor(
    private elRef:ElementRef,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
      
    this.form = this.formBuilder.group({
      password: [this.user.password],
      email: [this.user.email]
    });
  }

  ngOnInit() {
    this.updateBodyClass();

    var _this= this;
    $(this.elRef.nativeElement).find("input,select,textarea").not("[type=submit]")
    .jqBootstrapValidation({
      preventSubmit: true,
      submitError: function ($form, event, errors) {
      },
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
    this.userService.login(
        formValue.email,
        formValue.password
      )
      .subscribe(
        response => {
          console.log(response)
          if (response.ok) {
            let body = response.json();
            if (body.success) {
                this.router.navigate(['/login']);
            } else {
              this.showErrorMsg = true;
              this.alertMsg = body.message;     
            }
          } else {
            this.showErrorMsg = true;    
          }
        },
        error => { 
          this.showErrorMsg = true;
          console.log(error)
        }
      );
  }

  updateBodyClass()
  {
    let body = document.getElementsByTagName('body')[0];
    body.setAttribute("data-col", "1-column");
    body.classList.remove("2-columns", 'fixed-navbar');
    body.classList.add("1-column", "blank-page");
  }
}
