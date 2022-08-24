import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  baseImgUrl:string = 'http://satafood.codesroots.com/';
  mainSliders:any = [];

  constructor(
    private _GetDataService:GetDataService
  ) { }

  ngOnInit(): void {
    this._GetDataService.getMainSliders().subscribe(
      (data)=>{
        console.log('sliders resp');
        console.log(data);
        this.getSliders(data);
      }
    );
  }

  getSliders(data:any){
    for (let i =0; i<data.length; i++){
      if(data[i].AdsSpacesprice.length>0){
        for(let j=0; j<data[i].AdsSpacesprice.length; j++){
          this.mainSliders.push(data[i].AdsSpacesprice[j].sliders.photo);
        }
      }
    }
  }

}
