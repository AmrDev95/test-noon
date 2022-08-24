import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataShareService } from '../data-share.service';
import { GetPercentageForVendors } from "../get-percentage-for-vendors";


@Component({
  selector: 'app-get-percentage-for-vendors',
  templateUrl: './get-percentage-for-vendors.component.html',
  styleUrls: ['./get-percentage-for-vendors.component.scss']
})
export class GetPercentageForVendorsComponent implements OnInit, OnChanges {

  @Input () Data:any ={};
  displayData:GetPercentageForVendors ={};
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
