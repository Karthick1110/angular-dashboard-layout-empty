import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarTopComponent } from './nav-bar-top/nav-bar-top.component';
import { NavBarLeftComponent } from './nav-bar-left/nav-bar-left.component';
import { WidgetComponent } from './widget/widget.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarTopComponent,
    NavBarLeftComponent,
    WidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
