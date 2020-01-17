import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  getBeer() {
    // return this.http.get('https://api.openbrewerydb.org/breweries')
    return this.http.get('https://https://gist.github.com/nanotaboada/6396437')
  }
}
