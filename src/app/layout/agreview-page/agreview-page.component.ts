import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { TestService } from 'src/app/shared/services';

@Component({
  selector: 'app-agreview-page',
  templateUrl: './agreview-page.component.html',
  styleUrls: ['./agreview-page.component.scss'],
    animations: [routerTransition()]
})
export class AgreviewPageComponent implements OnInit {

  constructor(private serviceTest: TestService) { }

  ngOnInit() {
      this.serviceTest.helloWorld();
  }

}
