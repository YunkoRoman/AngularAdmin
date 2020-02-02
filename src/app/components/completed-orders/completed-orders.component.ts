import { Component, OnInit } from '@angular/core';
import {SocketService} from "../../services/socket.service";
import {Response} from "../../interfaces/Response";
import {OrderService} from "../../services/order.service";
import {Subscription} from "rxjs/internal/Subscription";

@Component({
  selector: 'app-completed-order',
  templateUrl: './completed-orders.component.html',
  styleUrls: ['./completed-orders.component.css']
})
export class CompletedOrdersComponent implements OnInit {

  private statusList: any = [];
  private completedOrders: any;
  private sub: Subscription;
  private  visibleIndex: number = -1;

  constructor(private SocketService: SocketService,
              private OrderService: OrderService
  ) {
  }

  ngOnInit() {
    this.getOrderStatus();

    this.SocketService.changeStatusOrder();

    this.getSocketData()

  }
  getOrderStatus(){
    this.OrderService.getStatus(1).subscribe((data: Response) => {
      this.statusList = data.msg;

    })
  }

  getSocketData(): void {
    this.sub = this.SocketService.getCompletedOrder()
      .subscribe(data => {
        console.log(data);
        this.completedOrders = data
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
    this.completedOrders.forEach(e => {
      e.order_status.status = status
    });
    this.OrderService.changeStatus(order_id, status_id).subscribe((data:Response) => {
      console.log(data);
    })

  }

}
