import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-agreview-page',
  templateUrl: './agreview-page.component.html',
  styleUrls: ['./agreview-page.component.scss'],
    animations: [routerTransition()]
})
export class AgreviewPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
