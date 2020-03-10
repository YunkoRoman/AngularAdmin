import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppSettings} from '../constants/appSettings'

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(public http: HttpClient) {
  }


  getStatus(restaurant_id: number) {
    return this.http.get(AppSettings.API + '/order/getStatus/' + restaurant_id)
  }

  changeStatus(order_id: number, status_id: number) {
    return this.http.post(AppSettings.API + '/order/changeStatus', {order_id, status_id})
  }

  getComplOrders(restaraunt_id) {
    return this.http.get(AppSettings.API + '/order/complOrders/' + restaraunt_id)
  }

}
