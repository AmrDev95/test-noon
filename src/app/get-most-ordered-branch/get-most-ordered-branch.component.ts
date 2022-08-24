import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GetMostOrderedBranch } from '../get-most-ordered-branch'

@Component({
  selector: 'app-get-most-ordered-branch',
  templateUrl: './get-most-ordered-branch.component.html',
  styleUrls: ['./get-most-ordered-branch.component.scss']
})
export class GetMostOrderedBranchComponent implements OnInit, OnChanges {

  @Input () Data:any ={};
  displayData:GetMostOrderedBranch ={};
  baseImgUrl:string = 'http://satafood.codesroots.com/';

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.displayData = changes['Data'].currentValue;
    console.log(this.displayData);
  }

}
