import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GitusersComponent } from './gitusers/gitusers.component';
import { GituserDetailComponent } from './gituser-detail/gituser-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    GitusersComponent,
    GituserDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
