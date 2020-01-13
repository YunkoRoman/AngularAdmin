import {Injectable} from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {Observable} from "rxjs/internal/Observable";


@Injectable({
  providedIn: 'root'
})
export class SocketService {


  constructor(private socket: Socket) {
  }

  sendRestaurantId() {
    this.socket.emit('restaurant_id', 2)
  }
  // getOrders(){
  // this.socket.on('getOrders', result => {
  //   console.log(result);
  // })
  // }
  observer;
  getOrders(): Observable<any> {
    this.socket.on('getOrders', (res) => {
      this.observer.next(res);
    });
    return this.getSocketDataObservable();
  }
  getSocketDataObservable(): Observable<any> {
    return new Observable(observer => {
      this.observer = observer;
    });
  }

}
