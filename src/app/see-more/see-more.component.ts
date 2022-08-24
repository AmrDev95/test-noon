import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataShareService } from '../data-share.service';
import { Homepage } from '../homepage';


@Component({
  selector: 'app-see-more',
  templateUrl: './see-more.component.html',
  styleUrls: ['./see-more.component.scss']
})
export class SeeMoreComponent implements OnInit {

  seeMoreFlag:boolean = false;
  displayData:any = {};
  baseImgUrl:string = 'http://satafood.codesroots.com/';

  constructor(
    private _DataShareService:DataShareService
  ) { }

  ngOnInit(): void {
    this._DataShareService.seeMore.subscribe(
      ()=> {
        this.displayData = this._DataShareService.seeMore.getValue();
        console.log(this.displayData);
      }
    );

    this._DataShareService.flag.subscribe(
      ()=>this.seeMoreFlag = this._DataShareService.flag.getValue()
    );
  }

  disableSeeMore(){
    this._DataShareService.flag.next(false);
    this.seeMoreFlag = this._DataShareService.flag.getValue();
  }

}
