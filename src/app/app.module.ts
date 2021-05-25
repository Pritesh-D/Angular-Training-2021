import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements'
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { GridComponent } from './grid/grid.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ProductformComponent } from './productform/productform.component';
import { FocusonhoverDirective } from './directives/focusonhover.directive';
import { UniqueidvalidatorDirective } from './directives/uniqueidvalidator.directive';
import { ProductserviceformComponent } from './productserviceform/productserviceform.component';
import { HttpClientModule } from '@angular/common/http';
import { DropdownEmelentComponent } from './customelements/app.dropdown.element';
import { DropdownconusumerComponent } from './customelements/app.dropdownconsumer.component';

import './litelements/app.simple.litelement';
import { LitElementConsumerComponent } from './litelements/app.litconsumer.component';



@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    CalculatorComponent,
    GridComponent,
    ProductComponent,
    DropdownComponent,
    ProductformComponent,
    FocusonhoverDirective,
    UniqueidvalidatorDirective,
    ProductserviceformComponent,
    DropdownEmelentComponent,
    DropdownconusumerComponent,
    LitElementConsumerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'litelement', component: LitElementConsumerComponent },
      { path: 'customelement', component: DropdownconusumerComponent },
      { path: 'productserviceform', component: ProductserviceformComponent },
      { path: 'productform', component: ProductformComponent },
      { path: 'product', component: ProductComponent },
      { path: 'calculator', component: CalculatorComponent },
      { path: 'table', component: TableComponent },
      { path: '', redirectTo: '', pathMatch: 'full' }
    ])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [DropdownEmelentComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    const dropdownElement = createCustomElement(DropdownEmelentComponent, { injector: this.injector });
    customElements.define('dropdown-element',dropdownElement);
  }
}
