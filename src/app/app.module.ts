import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

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
    ProductserviceformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'productserviceform', component: ProductserviceformComponent },
      { path: 'productform', component: ProductformComponent },
      { path: 'product', component: ProductComponent },
      { path: 'calculator', component: CalculatorComponent },
      { path: 'table', component: TableComponent },
      { path: '', redirectTo: 'productserviceform', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
