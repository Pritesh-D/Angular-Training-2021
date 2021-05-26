import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css', './../../../node_modules/bootstrap/dist/css/bootstrap.min.css', './../../../node_modules/font-awesome/css/font-awesome.min.css']
})
export class DropdownComponent implements OnInit {

  private _dataSource: Array<string>;
  private _selectedValue: string;

  @Output()
  changeEvent: EventEmitter<string>

  constructor() {
    this._dataSource = new Array<string>();
    this._selectedValue = '';
    this.changeEvent = new EventEmitter<string>();
  }

  ngOnInit(): void {
  }

  @Input()
  set DataSource(data: Array<string>) { this._dataSource = data; }
  get DataSource(): Array<string> { return this._dataSource; }

  @Input()
  set SelectedValue(value: string) { this._selectedValue = value; }
  get SelectedValue(): string { return this._selectedValue; }

  selectChange() {
    this.changeEvent.emit(this._selectedValue);
  }
}
