import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'hfiles-asset-management';
  isLoggedIn = false;

  ngOnInit() {
    this.isLoggedIn = localStorage.getItem('svi-token') != null;
  }

}



