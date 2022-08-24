import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MostSellItems } from '../most-sell-items'

@Component({
  selector: 'app-most-sell-items',
  templateUrl: './most-sell-items.component.html',
  styleUrls: ['./most-sell-items.component.scss']
})
export class MostSellItemsComponent implements OnInit, OnChanges {

  @Input () Data:any ={};
  displayData:MostSellItems ={};
  baseImgUrl:string = 'http://satafood.codesroots.com/';

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.displayData = changes['Data'].currentValue;
    console.log(this.displayData);
  }

}
