import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { GridComponent } from './grid/grid.component';
import { RowComponent } from './row/row.component';
import { HttpClientModule } from '@angular/common/http';
import { FreeDeliveryBranchesComponent } from './free-delivery-branches/free-delivery-branches.component';
import { GetNearestBrancheComponent } from './get-nearest-branche/get-nearest-branche.component';
import { GetPercentageForVendorsComponent } from './get-percentage-for-vendors/get-percentage-for-vendors.component';
import { MostSellItemsComponent } from './most-sell-items/most-sell-items.component';
import { GetMostOrderedBranchComponent } from './get-most-ordered-branch/get-most-ordered-branch.component';
import { LastoffersComponent } from './lastoffers/lastoffers.component';
import { SeeMoreComponent } from './see-more/see-more.component';
import { NavbarComponent } from './navbar/navbar.component'


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    GridComponent,
    RowComponent,
    FreeDeliveryBranchesComponent,
    GetNearestBrancheComponent,
    GetPercentageForVendorsComponent,
    MostSellItemsComponent,
    GetMostOrderedBranchComponent,
    LastoffersComponent,
    SeeMoreComponent,
    NavbarComponent
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
