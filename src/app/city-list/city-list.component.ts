import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CoreService } from '../core.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit, OnDestroy {

  constructor(private fb: FormBuilder, private serv: CoreService) { }
  cityFormGroup: FormGroup;
  stateChanged: Subscription;
  cityList: any = [];
  ngOnInit(): void {
    this.fnIntiateFor()

    this.stateChanged = this.serv.stateChanged.subscribe(res => {
      if (res) {
        this.serv.fnGeCitytList(res).then(result => {
          this.cityList = result;
          if (this.cityList.length > 0) {
            this.cityFormGroup.controls['city'].setValue(result[0].cityName);
            this.fnChangeCity()
          }
        })
      }
    })
  }

  fnIntiateFor() {
    this.cityFormGroup = this.fb.group({
      'city': ['', Validators.required]
    })
  }

  ngOnDestroy() {
    if (this.stateChanged) {
      this.stateChanged.unsubscribe()
    }
  }



  fnChangeCity() {
    
    if (this.cityFormGroup.value['city']) {
      this.serv.cityChanged.next(this.cityFormGroup.value['city'])
    }

  }

}
