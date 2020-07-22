import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CoreService } from '../core.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
  cityFormGroup: FormGroup;
  isClicked: any = false;
  stateList: any = [];
  selectedCityName: any = null;
  selectedStateName: any = null;

  cityChange: Subscription;
  constructor(private fb: FormBuilder, private serv: CoreService, private router: Router) { }

  ngOnInit(): void {
    this.fnIntiateFor()
    this.cityChange = this.serv.cityChanged.subscribe(res => {
      
      if (res) {
        this.selectedCityName = res;
      }
    })
    this.serv.fnGetList().then((res) => {
      if (res) {

        this.stateList = res;
      }
    })

  }


  fnIntiateFor() {
    this.cityFormGroup = this.fb.group({
      'state': ['', Validators.required]
    })
  }

  fnSubmit() {
    
    this.isClicked = true;
    if (this.selectedCityName && this.selectedStateName) {
      this.router.navigate(['result', { p1: this.selectedCityName, p2: this.selectedStateName }]);

    }

  }

  fnChangeState() {
    if (this.cityFormGroup.value['state']) {
      this.selectedStateName = this.stateList.filter(r => r.stateId == this.cityFormGroup.value['state'])[0].stateName;
      this.serv.stateChanged.next(this.cityFormGroup.value['state'])
    }

  }
  ngOnDestroy() {
    if (this.cityChange) {
      this.cityChange.unsubscribe()
    }
  }
}
