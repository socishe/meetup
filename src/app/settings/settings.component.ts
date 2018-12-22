import { Component, OnInit } from '@angular/core';
import { CatergoryService } from '../catergory.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
categories;
selectedVal: string;
  constructor(private categoryService: CatergoryService) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(dataCategory => {
      const dataObject: any = [],
      dataCategories = dataCategory.results;
    for ( let i = 0; i < dataCategories.length; i++ ) {
      dataObject.push(dataCategories[i].name);
      }
       this.categories = dataObject;

    });
  }

  onCatSelect(postInput: HTMLSelectElement) {

    console.log(postInput.value);
  }
}
