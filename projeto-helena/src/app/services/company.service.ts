import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Company} from "../models/company.model";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  getUrl = environment.url
  module = 'company/'
  constructor(protected http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get<any>(this.getUrl + this.module);
  }

  getById(id: number): Observable<Company> {
    return this.http.get<Company>(this.getUrl + this.module + id).pipe(map(x => new Company(x)));
  }

  delete(id: number): Observable<Company> {
    return this.http.delete<Company>(this.getUrl + this.module + id);
  }

  update(model: Company) {
    return this.http.put<Company>(this.getUrl + this.module + model.id, model).pipe(map(x => new Company(x)));
  }

  create(model: Company) {
    delete model.id;
    return this.http.post<Company>(this.getUrl + this.module, model).pipe(map(x => new Company(x)));
  }
}
