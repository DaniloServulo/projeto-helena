import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  showFiller = true;
  menu = sideMenu;
  constructor() { }

  ngOnInit(): void {
  }

}
const sideMenu = [
  {
    name: 'Empresa',
    route: 'company'
  },
]
