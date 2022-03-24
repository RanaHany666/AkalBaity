import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public totalItem : number = 0;


  constructor(private CartService : CartService) { }

  ngOnInit(): void {
    this.CartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }

}
