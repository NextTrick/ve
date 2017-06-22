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
    $("#serviceScenario").jsGrid({
        height: "auto",
        width: "100%",

        sorting: true,
        paging: true,
        autoload: true,

        controller: {
            loadData: function() {
                var d = $.Deferred();

                $.ajax({
                    url: "http://services.odata.org/V3/(S(3mnweai3qldmghnzfshavfok))/OData/OData.svc/Products",
                    dataType: "json"
                }).done(function(response) {
                    d.resolve(response.value);
                });

                return d.promise();
            }
        },

        fields: [
            { name: "Name", type: "text" },
            { name: "Description", type: "textarea", width: 150 },
            { name: "Rating", type: "number", width: 50, align: "center",
                itemTemplate: function(value) {
                    return $("<div>").addClass("rating").append(Array(value + 1).join("&#9733;"));
                }
            },
            { name: "Price", type: "number", width: 50,
                itemTemplate: function(value) {
                    return value.toFixed(2) + "$"; }
            }
        ]
    });
  }

}
