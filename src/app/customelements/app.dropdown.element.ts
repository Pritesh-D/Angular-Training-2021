import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    templateUrl: './app.dropdown.view.html',
})
export class DropdownEmelentComponent implements OnInit {

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

    set SelectedValue(value: string) { this._selectedValue = value; }
    get SelectedValue(): string { return this._selectedValue; }

    selectChange(val: any): void {
        this.changeEvent.emit(val);
    }
}
