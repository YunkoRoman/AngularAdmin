import {Component, OnInit} from '@angular/core';
import {StatisticsService} from "../../services/statistics.service";
import {Response} from "../../interfaces/Response";
import {NgForm} from "@angular/forms";
import * as moment from 'moment';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  private statisticsList: any = [];
  private statisticsList2: any = [];
  private showRestFilt: boolean = false;
  private menuList: any = [];
  public selected: { start: any, end: any };


  constructor(public StatisticsService: StatisticsService) {
  }

  ngOnInit() {
    // this.GetStatData()
    this.StatisticsService.menuList(1).subscribe((data: Response) => {
      this.menuList = data.msg
    })
  }


  showHide() {
    this.showRestFilt = this.showRestFilt === false;

  }

  choseOneRes(menu_id: any) {
    this.statisticsList2 = [];
    for (let i = 0; i < this.statisticsList.length; i++) {
      if (this.statisticsList[i].product.menu.id === menu_id) {
        this.statisticsList2.push(this.statisticsList[i])
      }

    }
  }

  // GenerateReport() {
  //   const date = this.selected;
  //   console.log(date);
  //   const iso = new Date(date.start._d);
  //   const dateStart = iso.setDate(iso.getDate() + 1);
  //
  //
  //   this.StatisticsService.RestStat(1, dateStart, date.end._d).subscribe((data: Response) => {
  //     this.statisticsList2 = data.msg;
  //     this.statisticsList = data.msg;
  //
  //     console.log(data.msg);
  //   });
  // }
}
