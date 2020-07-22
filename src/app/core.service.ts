import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  stateChanged = new BehaviorSubject<any>(null);
  cityChanged = new BehaviorSubject<any>(null);



  constructor(private http: HttpClient
  ) { }

  fnGetList() {
    return new Promise((resolve, reject) => {
      this.http.get('/api/v1/states')
        .subscribe((response: any) => {
          resolve(response);
        }, err => {
          resolve(false);
          throw err;
        });
    });
  }


  fnGeCitytList(stateId) {
    return new Promise((resolve, reject) => {
      this.http.get('/api/v1/states/cities/' + stateId)
        .subscribe((response: any) => {
          resolve(response);
        }, err => {
          resolve(false);
          throw err;
        });
    });
  }


}
