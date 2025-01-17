import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Simple Angular App (Multiple File)';
  items = ['Item 1.', 'Item 2.', 'Item 3.'];
  selectedItem: string | null = null;

  selectItem(item: string): void {
    this.selectedItem = item;
  }
}
