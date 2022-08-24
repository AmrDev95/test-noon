import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  seeMore = new BehaviorSubject<object>({});
  flag = new BehaviorSubject<boolean>(false);

  constructor() { }
}
