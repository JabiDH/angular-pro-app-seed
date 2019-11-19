import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
    selector: "list-item",
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['list-item.component.scss'],
    templateUrl: "list-item.template.html"
})
export class ListItemComponent {
    toggled: Boolean = false;

    @Input()
    item: any;
  
    @Output()
    remove = new EventEmitter<any>();
  
    constructor() {}
  
    toggle() {
      this.toggled = !this.toggled;
    }
  
    removeItem() {
      this.remove.emit(this.item);
    }
  
    getRoute(item: any) {
      return [`../meals`, item.$key];
    }

}