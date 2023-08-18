import { Component, Input, OnInit, Output } from '@angular/core';
import { Item } from './items';

@Component({
  selector: 'app-box-item',
  templateUrl: './box-item.component.html',
  styleUrls: ['./box-item.component.css']
})
export class BoxItemComponent {
  
  @Input() itemsToBoxItem?: Item[];
}
