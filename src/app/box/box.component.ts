import { Component, Input } from '@angular/core';
import { Item } from '../box-item/items';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent {

  @Input() itemsToBox?: Item[];
}
