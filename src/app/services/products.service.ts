import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private rootURL = 'https://api.escuelajs.co/api/v1/products';

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get<Product[]>(this.rootURL+'?offset=0&limit=30')

  }

  getProduct(id: number){
    return this.http.get<Product>(this.rootURL+`/${id}`)

  }



}
