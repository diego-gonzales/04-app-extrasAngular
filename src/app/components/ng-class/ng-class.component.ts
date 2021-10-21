import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

  alertType: string = 'alert-danger';
  properties = {
    danger: true
  };
  isLoading: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  saveChanges() {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  };

}
