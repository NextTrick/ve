import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  
  isLoading: boolean = false;

  constructor() { 

  }

  ngOnInit() {
  }

  toggleLoading() {
      this.isLoading = !this.isLoading;
  }

}
