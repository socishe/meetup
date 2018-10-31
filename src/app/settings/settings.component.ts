import { Component, OnInit } from '@angular/core';
import { CatergoryService } from '../catergory.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
categories;
selectedVal;
  constructor(private categoryService: CatergoryService) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(dataCategory => {
      const dataObject: any = [],
      dataCategories = dataCategory.data;
    for ( let i = 0; i < dataCategories.length; i++ ) {
        dataObject.push(dataCategories[i].category.name);
      }
        // Removing Duplicates
        const filter = dataObject.filter((el , i, a ) => i === a.indexOf(el)),
        cleanData = [];
        for ( let c = 0; c < filter.length; c++) {
          cleanData.push({
            name: filter[c]
        });
        }
       this.categories = cleanData;

    });
  }

  onCatSelect(event) {

    console.log(event.selectedVal.value);
  }
}
