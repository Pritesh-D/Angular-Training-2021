import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css',
    './../../../node_modules/bootstrap/dist/css/bootstrap.min.css',
    './../../../node_modules/font-awesome/css/font-awesome.min.css']
})
export class GridComponent implements OnInit {
  private _dataSource: Array<any>;
  private _tableHeaders: Array<string>;
  sortProperty: string
  sortType: string

  @Output()
  dataSelectEvent: EventEmitter<any>;

  @Output()
  dataDeleteEvent: EventEmitter<any>;

  constructor() {
    this.sortProperty = '';
    this.sortType = 'asc';
    this._dataSource = new Array<any>();
    this._tableHeaders = new Array<string>();
    this.dataSelectEvent = new EventEmitter<any>();
    this.dataDeleteEvent = new EventEmitter<any>();
  }

  ngOnInit(): void {
  }

  @Input()
  set DataSource(data: Array<any>) {
    if (this.sortProperty === '' && data.length > 0) {
      this.sortProperty = Object.keys(data[0])[0];
      data = this.sort(data, this.sortProperty, this.sortType);
    }
    this._dataSource = data;
  }
  get DataSource(): Array<any> {
    return this._dataSource
  }

  @Input()
  set TableHeaders(data: Array<string>) {
    this._tableHeaders = data;
  }
  get TableHeaders(): Array<string> {
    return this._tableHeaders
  }

  selectRow(data: any) {
    this.dataSelectEvent.emit(data)
  }

  deleteRow(data: any) {
    this.dataDeleteEvent.emit(data)
  }

  applySort(property: string) {
    if (this.sortProperty === property) {
      if (this.sortType === 'asc') this.sortType = "desc"
      else if (this.sortType === 'desc') this.sortType = "asc"
    }
    else {
      this.sortProperty = property
      this.sortType = "asc"
    }
    this._dataSource = this.sort(this._dataSource, this.sortProperty, this.sortType);
  }

  private sort(data: Array<any>, sortProperty: string, sortType: string): Array<any> {
    data.sort((a: any, b: any) => {
      if (sortType === "asc") {
        return a[sortProperty] > b[sortProperty] ? 1 : -1;
      }
      else {
        return a[sortProperty] < b[sortProperty] ? 1 : -1;
      }
    });
    return data;
  }
}
