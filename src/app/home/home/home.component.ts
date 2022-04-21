import { Component, OnInit } from '@angular/core';
import { CATEGORIES } from '../constants/categories';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  categories = CATEGORIES;

  constructor() {}

  ngOnInit(): void {}
}
