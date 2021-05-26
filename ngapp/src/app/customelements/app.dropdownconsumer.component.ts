import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dropdownconusumer',
    template: `
    <h1>This is angular custom element</h1>
    <div class="container">
        Received value is <strong>{{value}}</strong>
    </div>
    <hr>
    <dropdown-element [DataSource]="DataSource" on-changeEvent='onNootify($event)'></dropdown-element>
    `
})

export class DropdownconusumerComponent implements OnInit {
    DataSource: Array<string>;
    value: string;
    constructor() {
        this.DataSource = new Array<string>();
        this.DataSource.push("a");
        this.DataSource.push("b");
        this.DataSource.push("c");
        this.DataSource.push("d");
        this.value = '';
    }

    onNootify(event: any) {
        this.value = event.detail;
    }
    ngOnInit() { }
}