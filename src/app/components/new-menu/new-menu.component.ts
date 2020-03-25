import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Response} from "../../interfaces/Response";
import {AdminService} from "../../services/admin.service";

@Component({
  selector: 'app-new-menu',
  templateUrl: './new-menu.component.html',
  styleUrls: ['./new-menu.component.css']
})
export class NewMenuComponent implements OnInit {

  constructor(public AdminService: AdminService) {
  }

  ngOnInit(): void {
  }

  CreateMenu(form: NgForm) {
    this.AdminService.createMenu(form.value).subscribe((data: Response) => {
      console.log(data);
    })
  }
}
