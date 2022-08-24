import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  electronicsArrMP:string[] = ['Tv','Laptop', 'Consoles', 'Games','Cameras', 'Printers', 'Computer accessories'];
  electronicsArrTB:string[] = ['Samsung', 'LG', 'Lenovo', 'Dell', 'HP', 'Apple'];
  mobileArrMP:string[] = ["Mobile New Arrivals", "All Mobile Phones", "All Tablets","Smartwatches & Accessories","Wireless Earphones","Earphones","Powerbanks","Chargers & Cables","Selfie Sticks & Holders","Covers & Screen protectors,","Mobile Gaming & VR Gadgets","Micro SD Cards"];
  mobileArrTB:string[] = ["Samsung","Xiaomi","Apple","Huawei","Oppo","nokia","Honor","realme","infinix"];
  displayMP:string[] = [];
  displayTB:string[] = [];


  constructor() { }

  ngOnInit(): void {
    this.displayMP = this.electronicsArrMP;
    this.displayTB = this.electronicsArrTB;
  }

  changeData(id:number){
    switch (id) {
      case 1:
        this.displayMP = this.electronicsArrMP;
        this.displayTB = this.electronicsArrTB;
        break;
      case 2:
        this.displayMP = this.mobileArrMP;
        this.displayTB = this.mobileArrTB;
        break;
    }
  }

}
