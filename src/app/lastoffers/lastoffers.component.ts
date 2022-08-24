import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Lastoffers } from "../lastoffers";

@Component({
  selector: 'app-lastoffers',
  templateUrl: './lastoffers.component.html',
  styleUrls: ['./lastoffers.component.scss']
})
export class LastoffersComponent implements OnInit, OnChanges {

  @Input () Data:any ={};
  displayData:Lastoffers ={};
  baseImgUrl:string = 'http://satafood.codesroots.com/';

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.displayData = changes['Data'].currentValue;
    console.log(this.displayData);
  }

}
