import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { FilterPipe } from './pipe/filter.pipe';
import { SortByNamePipe } from './pipe/sort-by-name.pipe';
import { ShowComponent } from './page/show/show.component';
import { EditComponent } from './page/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    SortByNamePipe,
    ShowComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
