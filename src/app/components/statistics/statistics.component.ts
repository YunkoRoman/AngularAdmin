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
  public statisticsList: any = [];
  public statisticsList2: any = [];
  public showRestFilt: boolean = false;
  public menuList: any = [];
  public selected: { start: any, end: any };


  constructor(public StatisticsService: StatisticsService) {
  }

  ngOnInit() {
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

  GenerateReport() {

    const date = this.selected;
    const a = new Date(date.start._d);
    const b = new Date(date.end._d);

    let day = a.getDate();
    let year = a.getFullYear();
    let month = a.getMonth() + 1;
    const dateStart = `${year}-${month}-${day}`;

    let dayEnd = b.getDate();
    let yearEnd = b.getFullYear();
    let monthEnd = b.getMonth() + 1;
    const dateEnd = `${yearEnd}-${monthEnd}-${dayEnd}`;

    this.StatisticsService.RestStat(1, dateStart, dateEnd).subscribe((data: Response) => {
      this.statisticsList2 = data.msg;
      this.statisticsList = data.msg;

    });
  }
}
