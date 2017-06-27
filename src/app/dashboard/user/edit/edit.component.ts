import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      console.log('where on edit component');
  }

}
