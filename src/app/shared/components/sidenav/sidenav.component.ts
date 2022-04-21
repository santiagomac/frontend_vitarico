import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  isOpen: boolean = true;

  constructor() {}

  ngOnInit(): void {
    console.log(this.isOpen);
  }

  show() {
    console.log(this.isOpen);
  }
}
