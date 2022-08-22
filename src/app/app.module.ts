import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { GridComponent } from './grid/grid.component';
import { RowComponent } from './row/row.component';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    GridComponent,
    RowComponent
  ],
  imports: [
    BrowserModule,
    SwiperModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
