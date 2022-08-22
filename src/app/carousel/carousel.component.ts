import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor(
    private _GetDataService:GetDataService
  ) { }

  ngOnInit(): void {
    this._GetDataService.getHomePage().subscribe(
      (data)=>{
        console.log(data);
      }
    );
  }

}
