import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import {SocketService} from "../../services/socket.service";
@Component({
  selector: 'app-admin-title',
  templateUrl: './admin-title.component.html',
  styleUrls: ['./admin-title.component.css']
})
export class AdminTitleComponent implements OnInit {

  constructor(private SocketService:SocketService) { }

  ngOnInit() {

   this.SocketService.sendRestaurantId();
    this.SocketService.getOrders()
  }



}
