import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'
import { AgRendererComponent } from 'ag-grid-angular';

@Component({
  selector: 'app-initial-dates-cell',
  templateUrl: './initial-dates-cell.component.html',
  styleUrls: ['./initial-dates-cell.component.css']
})
export class InitialDatesCellComponent implements OnInit, AgRendererComponent {
  params;
  lfd; val;

  refresh(params: any): boolean {
    throw new Error("Method not implemented.");
  }
  agInit(params: import("ag-grid-community").ICellRendererParams): void {
    this.params = params;
  }
  afterGuiAttached?(params?: import("ag-grid-community").IAfterGuiAttachedParams): void {
    throw new Error("Method not implemented.");
  }

  constructor() { }

  ngOnInit() {
    if (this.params.data) {
      console.log(this.params.data)
      if (this.params.data.lfd)
        this.lfd = (this.params.data.direction == 'EXPORT' ? "CUTOFF" : "LFD") + ": " + moment(this.params.data.lfd).format('M/D');
      if (this.params.data.rdy)
        this.val = "RDY: " + moment(this.params.data.rdy).format('M/D')
      else if (this.params.data.eta)
        this.val = (this.params.data.direction == 'EXPORT' ? "ERD" : "ETA") + ": " + moment(this.params.data.eta).format('M/D')
      console.log(this.lfd)
    }
  }

  onInitialDateClick() {
    this.params.context.componentParent.onSetLoad(this.params.data)
  }
}
