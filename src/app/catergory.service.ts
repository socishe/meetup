import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatergoryService {

  constructor(private http: HttpClient) { }

  /**
   * Get all categories
   */
  getCategories() {

    return this.http
    .jsonp('https://api.meetup.com/find/groups?&sign=true&key=24a72563644351316c675a652414b&photo-host=public&location=Johannesburg'
    , 'callback');
}
}
