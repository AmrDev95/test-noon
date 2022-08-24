import { Component, OnInit } from '@angular/core';
import { GetDataService } from './get-data.service';
import { Homepage } from './homepage';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test-noon';

  homePageData:Homepage = {};
  seeMoreData:Homepage = {};

  constructor(
    private _GetDataService:GetDataService
  ){}

  ngOnInit():void{
    this._GetDataService.getHomePage().subscribe(
      (data)=>{
        this.homePageData = data;
        console.log(data);
      }
    );
  }
}
