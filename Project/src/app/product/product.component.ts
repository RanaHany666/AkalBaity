import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Product } from '../shared/product.model';
import { CartService } from '../services/cart.service';

import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers:[ProductService]

})
export class ProductComponent implements OnInit {
  // public productList: string[] = ["Product One", "Product Two", "Product Three"];
  productDetails: any;
  constructor(public productService: ProductService, private router: Router,  private CartService : CartService) { }

  ngOnInit(): void {
    this.productService.getProductList().subscribe(
      (res) => {
        this.productService.Products = res as Product[];
      console.log(Product)
    }
)
}
addtocart(item: any){
  this.CartService.addtoCart(item);
}
}
