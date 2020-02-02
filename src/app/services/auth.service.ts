import { Injectable } from '@angular/core';
import {AppSettings} from "../constants/appSettings";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient) {
  }

  authAdmin(login: string, password: string) {
    return this.http.post(AppSettings.API + '/auth', {login, password})
  }
}
