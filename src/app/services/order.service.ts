import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(public http: HttpClient) {}


getStatus(restaurant_id) {
    return this.http.get('http://localhost:3001/order/getStatus/'+ restaurant_id)
}
changeStatus(order_id, status_id){
    return this.http.post('http://localhost:3001/order/changeStatus', {order_id, status_id})
}

}
