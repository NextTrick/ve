import { Component, OnInit, ViewEncapsulation} from '@angular/core';

import '../../../../assets/s/app-assets/js/core/libraries/jquery_ui/jquery-ui.min.js';
import '../../../../assets/s/app-assets/vendors/js/tables/jsgrid/jsgrid.min.js';
import '../../../../assets/s/app-assets/vendors/js/tables/jsgrid/griddata.js';
import '../../../../assets/s/app-assets/vendors/js/tables/jsgrid/jquery.validate.min.js';

import '../../../../assets/s/app-assets/js/scripts/tables/jsgrid/jsgrid.js';

@Component({
  selector: 'user-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css', 
              '../../../../assets/s/app-assets/vendors/css/tables/jsgrid/jsgrid-theme.min.css',
              '../../../../assets/s/app-assets/vendors/css/tables/jsgrid/jsgrid.min.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
