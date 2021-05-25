import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  allowedOperatorButtons: Array<string> = ['sin', 'cos', 'tan', '+/-', 'sqr', 'sqrt', '1/x', '+', '-', '*', '/'];
  allowedNumbersButtons: Array<string> = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'];
  summaryValue: string = '';
  firstValue = 0;
  secondValue: number = 0;
  result: number = 0;
  displayValue: string = '0';
  operator: string = '';
  waitingForSecondInout: boolean = false;
  constructor() {
    this.InitDefault();
  }

  private InitDefault() {
    this.result = 0;
    this.firstValue = 0;
    this.secondValue = 0;
    this.displayValue = '0';
    this.operator = '';
    this.summaryValue = '';
    this.waitingForSecondInout = false;
  }

  public numberclick(value: string): void {

    if (this.displayValue === '0' && value !== '0')
      this.displayValue = '';

    if (this.waitingForSecondInout && this.secondValue === 0)
      this.displayValue = '';

    this.displayValue += value;
    if (this.waitingForSecondInout) { this.secondValue = parseFloat(this.displayValue); }
    else { this.firstValue = parseFloat(this.displayValue); }
    this.updateSummaryValue();
  }

  public operatorclick(value: string): void {
    if (this.firstValue !== 0) {
      if (value === "=") {
        this.calculateResult();
        this.firstValue = this.result;
        this.secondValue = 0;
        this.displayValue = this.result.toString();
        this.waitingForSecondInout = false;
        this.operator = '';
      }
      else if (value === "sqr" || value === "sqrt" || value === "1/x" || value === "sin" || value === "cos" || value === "tan" || value === "+/-") {
        this.operator = value;
        this.calculateResult();
        this.firstValue = this.result;
        this.secondValue = 0;
        this.displayValue = this.result.toString();
        this.waitingForSecondInout = false;
        this.operator = '';
      }
      else if (this.waitingForSecondInout) {
        this.calculateResult();
        this.operator = value;
        this.firstValue = this.result;
        this.secondValue = 0;
        this.displayValue = this.result.toString();
        this.waitingForSecondInout = true;
      } else {
        this.operator = value;
        this.waitingForSecondInout = true;
      }
      this.updateSummaryValue();
    }
  }

  public clearClick(): void {
    this.InitDefault();
  }

  public clearValueClick(): void {
    this.displayValue = '0';
  }
  private updateSummaryValue() {
    let value = '';
    if (this.firstValue)
      value += this.firstValue

    if (this.operator) {
      value += this.operator

      if (this.secondValue)
        value += this.secondValue
    }
    this.summaryValue = value;
  }

  private calculateResult() {
    switch (this.operator) {
      case '+':
        if (this.firstValue && this.secondValue)
          this.result = this.firstValue + this.secondValue;
        break;
      case '-':
        if (this.firstValue && this.secondValue)
          this.result = this.firstValue - this.secondValue;
        break;
      case '*':
        if (this.firstValue && this.secondValue)
          this.result = this.firstValue * this.secondValue;
        break;
      case '/':
        if (this.firstValue && this.secondValue)
          this.result = this.firstValue / this.secondValue;
        break;
      case 'sqr':
        this.result = this.firstValue * this.firstValue;
        break;
      case 'sqrt':
        this.result = Math.sqrt(this.firstValue);
        break;
      case '1/x':
        this.result = 1 / this.firstValue;
        break;
      case 'sin':
        this.result = Math.sin(this.firstValue);
        break;
      case 'cos':
        this.result = Math.cos(this.firstValue);
        break;
      case 'tan':
        this.result = Math.tan(this.firstValue);
        break;
      case '+/-':
        this.result = this.firstValue * -1;
        break;
      default:
        this.result = this.firstValue;
    }
  }
}
