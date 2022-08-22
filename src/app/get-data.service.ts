import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(
    private _HttpClient:HttpClient
  ) { }

  getMainSliders():Observable<any>{
    return this._HttpClient.post('http://satafood.codesroots.com:3000/api/MobileMainPage/GetMainSliders',{"googleId" : "ChIJ88rv8bI_WBQRkvVBLDeZQUg"}, {headers:{'lang':'en'}} )
  }

  getHomePage():Observable<any>{
    return this._HttpClient.post('http://satafood.codesroots.com:3000/api/MobileMainPage/GetHomePage',{"googleId" : "ChIJ88rv8bI_WBQRkvVBLDeZQUg"}, {headers:{'lang':'en'}} )
  }

  getCategories():Observable<any>{
    return this._HttpClient.get('http://satafood.codesroots.com:3000/api/Categories/index');
  }
}
