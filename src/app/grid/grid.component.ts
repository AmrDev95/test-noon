import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore,{ Navigation, SwiperOptions } from "swiper";
import { GetDataService } from '../get-data.service';


SwiperCore.use([Navigation]);

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GridComponent implements OnInit {

  baseImgUrl:string = 'http://satafood.codesroots.com/';
  categoriesArr:any =[];

gridConfig:SwiperOptions = {
    slidesPerView:12,
    spaceBetween:30,
    slidesPerGroup:12,
    loop:false,
    loopFillGroupWithBlank:true,
    pagination:{
      clickable: true
    },
    navigation:true,
}

dynamicDataConfig:SwiperOptions = {
  slidesPerView:4,
  spaceBetween:30,
  slidesPerGroup:4,
  loop:false,
  loopFillGroupWithBlank:true,
  pagination:{
    clickable: true
  },
  navigation:true,
  breakpoints:{
    0:{
      slidesPerView:2,
      slidesPerGroup:2
    },

    600:{
      slidesPerView:4,
      slidesPerGroup:4
    }
  }
}

  constructor(
    private _GetDataService:GetDataService
  ) { }

  ngOnInit(): void {
    this._GetDataService.getCategories().subscribe(
      (data)=>{
        console.log('categories resp');
        console.log(data);
        this.categoriesArr = data;
      }
    );
  }

}
