import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SettingsComponent } from './settings/settings.component';
import { GroupComponent } from './group/group.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { CatergoryService } from './catergory.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SettingsComponent,
    GroupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [CatergoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
