import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SocketIoModule, SocketIoConfig} from 'ngx-socket-io';

import {AppComponent} from './app.component';
import {AdminTitleComponent} from './components/admin-title/admin-title.component';
import {OrdersPageComponent} from './components/orders-page/orders-page.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HeaderComponent} from './components/header/header.component';
import {RouterModule, Routes} from "@angular/router";
import {CompletedOrdersComponent} from './components/completed-orders/completed-orders.component';
import {StatisticsComponent} from './components/statistics/statistics.component';
import {NgxDaterangepickerMd} from "ngx-daterangepicker-material";
import {
  SatDatepickerModule,
  SatNativeDateModule
} from 'saturn-datepicker';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatDatepickerModule,} from "@angular/material/datepicker";
import {MatFormFieldModule,} from "@angular/material/form-field";
import {MatInputModule,} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatNativeDateModule} from "@angular/material/core";
import {CreationComponent} from './components/creation/creation.component'
import {HttpAuthInterceptor} from "./interceptor/auth.interceptor";
import {NewProdComponent} from './components/new-prod/new-prod.component';
import {NewMenuComponent} from './components/new-menu/new-menu.component';
import {YGuard} from './security/y.guard'


const routes: Routes = [
  {path: '', component: AdminTitleComponent},
  {path: 'orders', component: OrdersPageComponent, canActivate: [YGuard]},
  {path: 'completedOrders', component: CompletedOrdersComponent, canActivate: [YGuard]},
  {path: 'statistics', component: StatisticsComponent, canActivate: [YGuard]},
  {
    path: 'creation', component: CreationComponent, canActivate: [YGuard],
    canActivateChild: [YGuard],
    children: [
      {path: 'new_product', component: NewProdComponent},
      {path: 'new_menu', component: NewMenuComponent},
    ]
  },

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
    CreationComponent,
    NewProdComponent,
    NewMenuComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    SocketIoModule.forRoot(config),
    NgxDaterangepickerMd.forRoot(),
    HttpClientModule,
    SatDatepickerModule,
    BrowserAnimationsModule, ReactiveFormsModule, MatDatepickerModule,
    MatNativeDateModule, MatFormFieldModule, MatInputModule,
    MatButtonModule, SatDatepickerModule, SatNativeDateModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpAuthInterceptor, multi: true}, YGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
