import { Component } from '@angular/core';
import { data } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  columnDefs;
  rowData;

  constructor() {
    this.columnDefs = [
      {headerName: 'Make', field: 'make', width: 300},
      {headerName: 'Model', field: 'model', width: 300},
      {headerName: 'Price', field: 'price', width: 300}
    ];

    this.rowData = data;
  }
}
