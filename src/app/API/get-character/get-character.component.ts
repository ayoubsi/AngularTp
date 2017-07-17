import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-get-character',
  templateUrl: './get-character.component.html',
  styleUrls: ['./get-character.component.css']
})
export class GetCharacterComponent implements OnInit {

  constructor(private http: Http) { }

  @Input() heroes: Array<Object>;

  ngOnInit() {

  }

}
