import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatergoryService {
selectedVal: string;

  constructor(private http: HttpClient) { }

  /**
   * Get all categories
   */
  getGroups() {

   const result = this.http
    .jsonp('https://api.meetup.com/find/groups?&sign=true&key=24a72563644351316c675a652414b&photo-host=public&location=Johannesburg'
    , 'callback');
    return result;
}

getCategories() {

  return this.http
  .jsonp('https://api.meetup.com/2/categories?&sign=true&key=24a72563644351316c675a652414b&photo-host=public'
  , 'callback');
}

onCatSelect(event: any) {

  this.selectedVal = event.target.value;
}
}
