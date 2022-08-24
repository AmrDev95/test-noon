import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataShareService } from '../data-share.service';
import { GetNearestBranche } from "../get-nearest-branche";


@Component({
  selector: 'app-get-nearest-branche',
  templateUrl: './get-nearest-branche.component.html',
  styleUrls: ['./get-nearest-branche.component.scss']
})
export class GetNearestBrancheComponent implements OnInit, OnChanges {

  @Input () Data:any ={};
  displayData:GetNearestBranche ={};
  baseImgUrl:string = 'http://satafood.codesroots.com/';

  constructor(
    private _DataShareService:DataShareService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.displayData = changes['Data'].currentValue;
    console.log(this.displayData);
  }

  sendData(data:any){
    this._DataShareService.seeMore.next(data);
    this._DataShareService.flag.next(true);
  }

}
