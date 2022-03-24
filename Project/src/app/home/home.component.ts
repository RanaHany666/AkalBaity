import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  source = "/assets/Banner.png";
  iconthree = "/assets/iconone.svg";
  icontwo = "/assets/icontwo.svg";
  iconone = "/assets/iconthree.svg";
  constructor() { }

  ngOnInit(): void {
  }

}
