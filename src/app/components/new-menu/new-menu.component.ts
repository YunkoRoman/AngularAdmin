import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-new-menu',
  templateUrl: './new-menu.component.html',
  styleUrls: ['./new-menu.component.css']
})
export class NewMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  CreateMenu(Form: NgForm) {
    console.log(Form.value);
  }
}
