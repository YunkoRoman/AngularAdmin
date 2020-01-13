import {Component, OnInit} from '@angular/core';
import {SocketService} from "../../services/socket.service";
import {Subscription} from "rxjs/internal/Subscription";

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.css']
})
export class OrdersPageComponent implements OnInit {
  private statusList: any = [
    {name: 'В роботі'},
    {name: 'Готово'}
  ];
  private orders:any;
  private ShowStatusList: boolean = false;
  private sub: Subscription;

  constructor(private SocketService: SocketService) {
  }

  ngOnInit() {

    this.SocketService.sendRestaurantId();
    this.getSocketData()
  }

  getSocketData(): void {
    this.sub = this.SocketService.getOrders()
      .subscribe(data => {
        this.orders = data
      })
  }

  showStatusList() {
    if (this.ShowStatusList == false) {
      this.ShowStatusList = true
    } else {
      this.ShowStatusList = false
    }
  }

  ChooseStatus() {

  }
}
