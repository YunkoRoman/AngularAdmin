import {Component, OnInit} from '@angular/core';
import {SocketService} from "../../services/socket.service";
import {Subscription} from "rxjs/internal/Subscription";
import {OrderService} from "../../services/order.service";
import {Response} from "../../interfaces/Response";

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.css']
})
export class OrdersPageComponent implements OnInit {
  public statusList: any = [];
  public orders: any;
  public sub: Subscription;
  public visibleIndex: number = -1;

  constructor(public SocketService: SocketService,
              public OrderService: OrderService
  ) {
  }

  ngOnInit() {
    this.getOrderStatus();

    this.SocketService.sendRestaurantId();

    this.getSocketData()

  }

  getOrderStatus() {
    this.OrderService.getStatus(1).subscribe((data: Response) => {
      this.statusList = data.msg
    })
  }

  getSocketData(): void {
    this.sub = this.SocketService.getOrders()
      .subscribe(data => {
        console.log(data);
        this.orders = data
      })
  }


  showSubItem(ind) {
    if (this.visibleIndex === ind) {
      this.visibleIndex = -1;
    } else {
      this.visibleIndex = ind;
    }
  }


  ChooseStatus(status_id, order_id, status) {
    this.orders.forEach(e => {
      if (e.id == order_id) e.order_status.status = status
    });
    this.OrderService.changeStatus(order_id, status_id).subscribe((data: Response) => {
      console.log(data);
    })

  }
}
