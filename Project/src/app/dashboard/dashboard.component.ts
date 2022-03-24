import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../shared/product.model';
import { Router } from '@angular/router';

import { ProductService } from '../shared/product.service';

declare var M: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers:[ProductService]
})
export class DashboardComponent implements OnInit {
  showSucessMessage!: boolean;
  serverErrorMessages!: string;

  constructor(public productService: ProductService,private router: Router) { }

  ngOnInit() {
    this.resetForm();
    this.refreshProductList();

  }
  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.productService.selectedProduct = {
      _id: "",
      name: "",
      price: null,
      description: "",
      category:"",
      image:"",
      inc:1,
      qnt:1
      
    }
  }
  onSubmit(form: NgForm) {
    if (form.value._id == "") {
        this.productService.postProduct(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshProductList();
        
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.productService.putProduct(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshProductList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }
  
  refreshProductList() {
      this.productService.getProductList().subscribe((res) => {
      this.productService.Products = res as Product[];
      console.log(Product)
    });
  }
  onEdit(product: Product) {
    this.productService.selectedProduct = product;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.productService.deleteProduct(_id).subscribe((res) => {
        this.refreshProductList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }
}