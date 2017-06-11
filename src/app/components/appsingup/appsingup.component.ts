import { Component, OnInit, ElementRef, ViewEncapsulation} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import { UserService } from '../../services/user.service';
import '../../../assets/s/app-assets/vendors/js/forms/validation/jqBootstrapValidation.js';

@Component({
  selector: 'app-appsingup',
  templateUrl: './appsingup.component.html',
  styleUrls: ['./appsingup.component.css',
             '../../../assets/s/app-assets/css/plugins/forms/validation/form-validation.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppsingupComponent implements OnInit {

  form: FormGroup;
  user:any = {
    userName: '',
    password: '',
    email: ''
  };

  isValidForm: boolean = false;

  constructor(
      private elRef:ElementRef, 
      private userService: UserService,
      private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      userName: [this.user.userName],
      password: [this.user.password],
      email: [this.user.email]
    });
  }

  ngOnInit() {
    var _this= this;

    $(this.elRef.nativeElement).find("input,select,textarea").not("[type=submit]").jqBootstrapValidation({
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

  ngAfterViewInit() {

  }

  onSubmit(formValue: any):void {
    this.userService.signup(formValue.userName, formValue.email, formValue.password)
      .subscribe(
        response => console.log(response),
        error => console.log(error)
      );
  }
}
