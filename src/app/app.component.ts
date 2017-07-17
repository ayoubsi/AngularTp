import { Component, Input, Output, OnInit } from '@angular/core';
import { search } from './API/service/search';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private _serviceSearch: search) { }

  title = 'API Marvel';

  heroes: Array<Object>;
  favoris: Array<string> = [];

  ngOnInit() {
    var storedNames = JSON.parse(localStorage.getItem("favoris"));
    for (var i = 0; i < storedNames.length; i++) {
      this.favoris.push(storedNames[i]);
    }
  }



  onHeroesSearch(charName: string) {
    this._serviceSearch.getChar(charName).subscribe(data => this.heroes = data);
  }

  onAddFavoris(charNameForFav: string) {
    this.favoris.push(charNameForFav);
    localStorage.setItem("favoris", JSON.stringify(this.favoris));
  }
}
