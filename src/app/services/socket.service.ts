import {Injectable} from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {Observable} from "rxjs/internal/Observable";


@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private observer:any;

  constructor(private socket: Socket) {
  }

  sendRestaurantId() {
    this.socket.emit('restaurant_id', 1)
  }
  changeStatusOrder(){
    this.socket.emit('changeStatus', 1)
  }


  getOrders(): Observable<any> {
    this.socket.on('getOrders', (res) => {
      this.observer.next(res);
    });
    return this.getSocketDataObservable();
  }
  getCompletedOrder(): Observable<any> {
    this.socket.on('getCompletedOrders', (res) => {
      this.observer.next(res)
    });
    return this.getSocketDataObservable();
  }
  getSocketDataObservable(): Observable<any> {
    return new Observable(observer => {
      this.observer = observer;
    });
  }

}
