import { Component } from '@angular/core';
import { Item } from '../box-item/items';
import { isNgContainer } from '@angular/compiler';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  

  items? : Item[] = [
    { label: 'Home', icon: 'home'},
    { label: 'Search', icon: 'search' },
  ];

  library? : Item[] = [
    { label: 'My Courses', icon: 'video_library' }
  ];

  ok? : Item[] = [
    { label: 'My Courses', icon: 'video_library' }
  ];
}
