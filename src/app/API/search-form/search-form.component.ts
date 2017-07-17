import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  ngOnInit() {
  }

  charNameInput: string;

  @Output() charName: EventEmitter<string> = new EventEmitter<string>();
  @Output() charNameForFav : EventEmitter<string> = new EventEmitter<string>();

  loadChar(){
    this.charName.emit(this.charNameInput);
  }

  addInFavoris() {
    this.charNameForFav.emit(this.charNameInput);
  }

}
