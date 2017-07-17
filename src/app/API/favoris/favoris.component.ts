import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.css']
})
export class FavorisComponent implements OnInit {

  constructor() { }


  @Input() favoris: Array<string> = [];
  @Output() charName: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {

  }

  loadChar(event) {
    var target = event.target;
    var idAttr = target.id;

    this.charName.emit(idAttr);
  }



}
