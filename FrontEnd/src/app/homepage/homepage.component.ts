import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  token:any
  constructor() { }

  ngOnInit(): void {
    this.token = localStorage.getItem("token")
  }

}
