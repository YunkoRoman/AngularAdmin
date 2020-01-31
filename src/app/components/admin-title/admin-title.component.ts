import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-admin-title',
  templateUrl: './admin-title.component.html',
  styleUrls: ['./admin-title.component.css']
})
export class AdminTitleComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

  }

  sendForm(loginForm: NgForm) {
    console.log(loginForm.value);

  }


}
