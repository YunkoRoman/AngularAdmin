import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(public http: HttpClient) { }


  RestStat(restaurant_id, dateStart, dateEnd ){
    return this.http.post(`http://localhost:3001/statistic`, {restaurant_id, dateStart, dateEnd})
  };
  menuList(restaurant_id){
    return this.http.get(`http://localhost:3001/statistic/menu/${restaurant_id}`)
  }
}
