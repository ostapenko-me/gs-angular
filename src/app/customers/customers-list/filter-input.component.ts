import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'filter-input',
  template: `
  Filter: <input type="text" [(ngModel)]="value" />
  `
})
export class FilterInputComponent implements OnInit{
  private _value: string = '';
  @Input() get value(): string {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
    this.filter.emit(value);
  }
  @Output() filter = new EventEmitter<string>();


  ngOnInit(): void {
  }

}
