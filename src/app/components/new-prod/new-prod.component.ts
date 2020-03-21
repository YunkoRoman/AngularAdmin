import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Response} from "../../interfaces/Response";
import {StatisticsService} from "../../services/statistics.service";
import {AdminService} from "../../services/admin.service";
import {Error} from "tslint/lib/error";

@Component({
  selector: 'app-new-prod',
  templateUrl: './new-prod.component.html',
  styleUrls: ['./new-prod.component.css']
})
export class NewProdComponent implements OnInit {
  public menuList: any;
  private selectedFile: any;

  constructor(public StatisticsService: StatisticsService,
              public AdminService: AdminService) {
  }

  ngOnInit(): void {
    this.StatisticsService.menuList(1).subscribe((data: Response) => {
      this.menuList = data.msg;
      console.log(this.menuList);
    })
  }


  CreateProd(ProdForm: NgForm) {

    console.log(ProdForm.value);
    const fd = new FormData();
    fd.append('picture', this.selectedFile, this.selectedFile.name);
    this.AdminService.createPoduct(ProdForm.value).subscribe((data: Response) => {
      console.log(data);
      if (data.success === true) {
        this.AdminService.sendPicture(fd, data.msg.id).subscribe(data =>{
          console.log(data);
        })
      } else {
        throw new Error('CRASH')
      }
    })

  }public


  FileChange($event) {
    this.selectedFile = <File>$event.target.files[0];
    console.log(this.selectedFile);
  }
}
