import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SocketIoModule, SocketIoConfig} from 'ngx-socket-io';

import {AppComponent} from './app.component';
import {AdminTitleComponent} from './components/admin-title/admin-title.component';
import {OrdersPageComponent} from './components/orders-page/orders-page.component';
import {HttpClientModule} from "@angular/common/http";
import {HeaderComponent} from './components/header/header.component';
import {RouterModule, Routes} from "@angular/router";
import { CompletedOrdersComponent } from './components/completed-orders/completed-orders.component';
import { StatisticsComponent } from './components/statistics/statistics.component';

const routes: Routes = [
  {path: '', component: AdminTitleComponent},
  {path: 'orders', component: OrdersPageComponent},
  {path: 'completedOrders', component: CompletedOrdersComponent},
  {path: 'statistics', component: StatisticsComponent},
];
const config: SocketIoConfig = {url: 'http://localhost:4444', options: {}};

@NgModule({
  declarations: [
    AppComponent,
    AdminTitleComponent,
    OrdersPageComponent,
    HeaderComponent,
    CompletedOrdersComponent,
    StatisticsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    SocketIoModule.forRoot(config),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
