import { Component, OnInit, ViewEncapsulation} from '@angular/core';

import '../../../assets/s/app-assets/js/core/libraries/jquery_ui/jquery-ui.min.js';
import '../../../assets/s/app-assets/vendors/js/tables/jsgrid/jsgrid.min.js';
import '../../../assets/s/app-assets/vendors/js/tables/jsgrid/griddata.js';
import '../../../assets/s/app-assets/vendors/js/tables/jsgrid/jquery.validate.min.js';

import '../../../assets/s/app-assets/js/scripts/tables/jsgrid/jsgrid.js';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css', 
              '../../../assets/s/app-assets/vendors/css/tables/jsgrid/jsgrid-theme.min.css',
              '../../../assets/s/app-assets/vendors/css/tables/jsgrid/jsgrid.min.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserlistComponent implements OnInit {

  constructor() { }

  ngOnInit() {  
  }

}
