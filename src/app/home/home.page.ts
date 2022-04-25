import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  data: any;
  constructor() {}
  ngOnInit() {
    fetch('assets/json/movies.json')
      .then((res) => res.json())
      .then((json) => {
        this.data = json['results'];
      });
  }

  changeColor(rating: number) {
    if (rating > 7) {
      return 'blue';
    } else if (rating > 6 && rating <= 7) {
      return 'green';
    } else if (rating <= 6) {
      return 'red';
    }
  }
}
