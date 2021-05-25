import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css', './../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class TableComponent implements OnInit {
  values: Array<any>;
  constructor() {
    this.values = new Array();
    this.values.push({ id: 101, name: "Jhon", departmentId: "IT", salary: 1000 });
    this.values.push({ id: 102, name: "Sunil", departmentId: "Developer", salary: 2000 });
    this.values.push({ id: 103, name: "bahubali", departmentId: "BA", salary: 3000 });
    this.values.push({ id: 104, name: "jayesh", departmentId: "SR-Developer", salary: 4000 });
    this.values.push({ id: 105, name: "Ashu", departmentId: "IT", salary: 1000 });
    this.values.push({ id: 106, name: "mit", departmentId: "Developer", salary: 1000 });
    this.values.push({ id: 107, name: "kattapa", departmentId: "BA", salary: 3000 });
    this.values.push({ id: 108, name: "kripesh", departmentId: "SR-Developer", salary: 4000 });
    this.values.push({ id: 109, name: "Noah", departmentId: "IT", salary: 1000 });
    this.values.push({ id: 110, name: "Oliver", departmentId: "Developer", salary: 2000 });
    this.values.push({ id: 111, name: "William", departmentId: "BA", salary: 3000 });
    this.values.push({ id: 112, name: "Elijah", departmentId: "SR-Developer", salary: 4000 });
    this.values.push({ id: 113, name: "James", departmentId: "IT", salary: 1000 });
    this.values.push({ id: 114, name: "Benjamin", departmentId: "Developer", salary: 1000 });
    this.values.push({ id: 115, name: "Lucas", departmentId: "BA", salary: 3000 });
    this.values.push({ id: 116, name: "Mason", departmentId: "SR-Developer", salary: 4000 });
    this.values.push({ id: 117, name: "Jacob", departmentId: "QA", salary: 1000 });
    this.values.push({ id: 118, name: "Henry", departmentId: "QA", salary: 1000 });
    this.values.push({ id: 119, name: "Alexander", departmentId: "QA", salary: 3000 });
    this.values.push({ id: 120, name: "Ethan", departmentId: "QA", salary: 4000 });
  }

  ngOnInit(): void {
  }
}
