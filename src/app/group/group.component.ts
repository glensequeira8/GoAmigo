import { Component, OnInit } from '@angular/core';

import { NavbarService } from './../navbar/navbar.service';

import {TabsModule} from "ng2-tabs";


@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  constructor(public nav: NavbarService) { }

  ngOnInit() {
    this.nav.show();
  }

}
