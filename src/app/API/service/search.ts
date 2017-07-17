import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class search {

  constructor(private http: Http) { }


  getChar(char: string) {
    return this.http.get(`https://gateway.marvel.com:443/v1/public/characters?name=`+char+`&ts=1&apikey=e77571cf6f4416a1e8414e195e829e61&hash=37c103e22e53597ff2d8a4791fe6de4a`)
      .map((res: Response) => res.json().data.results);
  }



}
