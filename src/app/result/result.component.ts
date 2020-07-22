import { Component, OnInit, OnDestroy } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  selectedCityName: any;
  selectedStateName: any;
  sub: Subscription;
  constructor(private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    if (this.route.snapshot.params) {
      this.selectedCityName = this.route.snapshot.params["p1"] || '';
      this.selectedStateName = this.route.snapshot.params["p2"] || '';

    }
  }



}
