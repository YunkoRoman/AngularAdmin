import {Component, OnInit} from '@angular/core';

import {Response} from "../../interfaces/Response";
import {OrderService} from "../../services/order.service";


@Component({
  selector: 'app-completed-order',
  templateUrl: './completed-orders.component.html',
  styleUrls: ['./completed-orders.component.css']
})
export class CompletedOrdersComponent implements OnInit {

  private statusList: any = [];
  private completedOrders: any;

  private visibleIndex: number = -1;

  constructor(
    private OrderService: OrderService
  ) {
  }

  ngOnInit() {
    this.getOrderStatus();
    this.getComplOrders();


  }
  getComplOrders(){
    this.OrderService.getComplOrders(1).subscribe((data:Response) => {
      this.completedOrders = data.msg;
      console.log(data);
    })
  }

  getOrderStatus() {
    this.OrderService.getStatus(1).subscribe((data: Response) => {
      this.statusList = data.msg;

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
      if (e.id == order_id) e.order_status.status = status
    });
    this.OrderService.changeStatus(order_id, status_id).subscribe((data: Response) => {
      console.log(data);
    })

  }

}
