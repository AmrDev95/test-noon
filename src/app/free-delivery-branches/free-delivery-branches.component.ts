import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { DataShareService } from '../data-share.service';
import { GetFreeDliveryBranches } from "../get-free-dlivery-branches";
import { Homepage } from '../homepage';


@Component({
  selector: 'app-free-delivery-branches',
  templateUrl: './free-delivery-branches.component.html',
  styleUrls: ['./free-delivery-branches.component.scss']
})
export class FreeDeliveryBranchesComponent implements OnInit, OnChanges {

  @Input () Data:any ={};
  displayData:GetFreeDliveryBranches ={};
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
