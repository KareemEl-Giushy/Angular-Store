import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {

  @Input() title: string = "";
  @Input() list: any[] = [];

  @Output()selectedValue = new EventEmitter();

  detectChange(event: any) {
    this.selectedValue.emit(event)
  }

}
