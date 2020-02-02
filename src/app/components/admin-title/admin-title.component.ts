import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Response} from "../../interfaces/Response";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-title',
  templateUrl: './admin-title.component.html',
  styleUrls: ['./admin-title.component.css']
})
export class AdminTitleComponent implements OnInit {

  constructor(private AuthService: AuthService,
              private router: Router) {
  }

  ngOnInit() {

  }


  sendForm(loginForm: NgForm) {

    this.AuthService.authAdmin(loginForm.value.login, loginForm.value.password).subscribe((data: Response) => {
      localStorage.setItem('token', data.msg);
      if (data.success == true) this.router.navigate(['orders'])

    })

  }


}
