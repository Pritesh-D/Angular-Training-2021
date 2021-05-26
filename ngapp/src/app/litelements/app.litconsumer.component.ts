import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-litelementconsumer',
    template: `
    <h2>Lit Element Demo</h2>
    <input type="text" [(ngModel)]="message">
    <simple-element [inputMessage]="message" [list]="values" on-lit-click="reciveMessage($event)"></simple-element>
    `
})

export class LitElementConsumerComponent implements OnInit {
    message: string;
    values: Array<string>;
    constructor() {
        this.message = 'I am Great';
        this.values = new Array<string>();
        this.values.push("a");
        this.values.push("b");
        this.values.push("c");
        this.values.push("d");
        this.values.push("e");
    }
   
    reciveMessage(event: any): void {
        this.message = event.detail.data;
    }

    ngOnInit() { }
}