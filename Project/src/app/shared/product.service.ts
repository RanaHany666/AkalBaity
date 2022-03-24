import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { environment } from '../../environments/environment';
import { Product } from './product.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  selectedProduct: Product = {
    _id:"",
    name:'',
    price: null,
    description: "",
    category:"",
    image:"",
    inc:1,
    qnt:1
  };
  
  Products: any= [];

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };
  constructor(private http: HttpClient) { }

  postProduct(product: Product){
    return this.http.post(environment.apiBaseUrl+'/products', product);
    
  }
  getProductList() {
    return this.http.get(environment.apiBaseUrl+'/products');
  }
 
  putProduct(product: Product) {
    return this.http.put(environment.apiBaseUrl+'/products'+ `/${product._id}`, product);
  }

  deleteProduct(_id: string) {
    return this.http.delete(environment.apiBaseUrl+'/products' + `/${_id}`);
  }
}
