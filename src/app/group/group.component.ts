import { Component, OnInit } from '@angular/core';
import { CatergoryService } from '../catergory.service';
import { SettingsComponent } from '../settings/settings.component';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  groups;
  selectedVal: string;
  constructor(public groupService: CatergoryService) { }
  ngOnInit() {
    this.groupService.getGroups().subscribe(dataCategory => {
      const dataObject: any = [],
      dataGroups = dataCategory.data;
    for ( let i = 0; i < dataGroups.length; i++ ) {
        dataObject.push(dataGroups[i].category.name);
      }
       this.groups = dataGroups;
    });
  }

}
