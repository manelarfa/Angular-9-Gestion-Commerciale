import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Conssteg } from '../model/conssteg';
import { Residence } from '../model/residence';
import { Lconssteg } from '../model/lconssteg';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ConsstegService {
  private baseUrl = '/api/steg';
  public formData:  FormGroup; 
  list: Lconssteg[] = [];
  listResidence : Residence[]
  constructor(private http:HttpClient,private toastr: ToastrService) { }
  choixmenu : number = 1;
  getData(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
 
  saveOrUpdate(info: Object): Observable<Object> {
  
    return this.http.post(`${this.baseUrl}`, info);
  }
  updatedata(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteData(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
