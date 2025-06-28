import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [CommonModule, FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {
  city = '';
  @Output() searchEvent = new EventEmitter<string>();

  onSearch() {
    if (this.city.trim()) {
      this.searchEvent.emit(this.city);
    }
  }
}
