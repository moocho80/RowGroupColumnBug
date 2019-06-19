import { Component, OnInit } from '@angular/core';
import { PriceComponent } from './price/price.component';
import { HttpClient } from '@angular/common/http';
import { InitialDatesCellComponent } from './initial-dates-cell/initial-dates-cell.component';
import { Load } from './classes/load';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'ag-grid-bug';
  load:Load;colId

  columnDefs = [
    {headerName:'status', field: 'status',pinned:'left',lockPosition: true, rowGroup:true},
    { headerName: 'Load #', field: 'load_number', width: 74, pinned: 'left', lockPosition: true, suppressMovable: true }
    , { headerName: 'Destination', field: 'destination', width: 120, pinned: 'left', editable:true }
    , { headerName: 'Ref #', field: 'ref_number', width: 80, pinned: 'left', editable: true }
    , { headerName: 'Container #', field: 'container_number', width: 120, pinned: 'left', editable: true },
    { headerName: 'dates', colId:'dates', cellRenderer: 'initialDatesCell'},
    { headerName: 'lfd', field: 'lfd', cellRenderer:'price' }
  ]
  
  frameworkComponents = {
    initialDatesCell: InitialDatesCellComponent, price:PriceComponent
  };
  components = {'price':PriceComponent}

  rowData:any

  constructor(private http:HttpClient){}

  ngOnInit(){
    this.rowData = this.http.get('https://gsfreightserver.herokuapp.com/loads')
  }

  onSetLoad(load, colId?) {
    // console.log("onSetLoad: " + load._id)
    this.load = load
    this.colId = colId
  }
}