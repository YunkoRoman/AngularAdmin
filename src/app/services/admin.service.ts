import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppSettings} from "../constants/appSettings";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(public http: HttpClient) {
  }


  createPoduct(form: any) {
    return this.http.post(AppSettings.API + '/admin/createProduct/', form)
  }

  sendPicture(file: any, prod_id) {
    return this.http.post(AppSettings.API + '/admin/createProduct/picture/' + prod_id, file)
  }

  createMenu(form: any) {
    return this.http.post(`${AppSettings.API}/admin/createMenu`, form)
  }


}
