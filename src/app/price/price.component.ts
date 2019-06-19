import { Component, OnInit } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit, AgRendererComponent  {
  params;val;

  refresh(params: any): boolean {
    throw new Error("Method not implemented.");
  }
  agInit(params: import("ag-grid-community").ICellRendererParams): void {
    this.params = params
  }
  afterGuiAttached?(params?: import("ag-grid-community").IAfterGuiAttachedParams): void {
    throw new Error("Method not implemented.");
  }

  constructor() { }

  ngOnInit() {
    this.val = "hello"
  }

}
