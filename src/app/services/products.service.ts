import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';
import { Category } from '../interfaces/category';

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

  addProduct(newData: any) {
    return this.http.post('https://api.escuelajs.co/api/v1/products/',newData)
  }

  updateProduct(id: number, newData: Product) {
    return this.http.put<Product>(this.rootURL+`/${id}`, newData)
  }

  deleteproduct(id: number){
    return this.http.delete<Product>(this.rootURL+`/${id}`)
  }

  getCategories(){
    return this.http.get<Category[]>('https://api.escuelajs.co/api/v1/categories')
  }

}
