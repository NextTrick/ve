import { Component, OnInit, ViewEncapsulation} from '@angular/core';

// Loaded by angular module
// import '../../../assets/s/app-assets/vendors/js/buttons/spin.js';
// import '../../../assets/s/app-assets/vendors/js/buttons/ladda.min.js';

@Component({
  selector: 'app-usercreate',
  templateUrl: './usercreate.component.html',
  styleUrls: ['./usercreate.component.css']
})
export class UsercreateComponent implements OnInit {
  // trigger-variable for Ladda
  isLoading: boolean = false;

  constructor() { 

  }

  ngOnInit() {
  }

  toggleLoading() {
      this.isLoading = !this.isLoading;
  }
}
