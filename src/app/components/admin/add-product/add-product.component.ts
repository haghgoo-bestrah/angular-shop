import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/interfaces/product';

import { FormGroup, FormControl,FormArray ,Validators } from '@angular/forms'
import { Category } from 'src/app/interfaces/category';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  categories!: Category[]
  addForm: FormGroup = new FormGroup({
    title: new FormControl('',Validators.required),
    price: new FormControl('',Validators.required),
    description: new FormControl('',Validators.required),
    category: new FormControl('',Validators.required),
    images: new FormArray([
      new FormControl()
    ])
  });

  constructor(private productservice: ProductsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.productservice.getCategories().subscribe((categories) => {
      this.categories = categories
     
      
      
    })
  }

  onSubmit() {
    let  newProduct = {
      
      title: this.addForm.value.title,
      price: this.addForm.value.price,
      description: this.addForm.value.description,
      categoryId: this.addForm.value.category,
      images: this.addForm.value.images
    }
    this.productservice.addProduct(newProduct).subscribe(product =>{
      console.log(product);
      
      this.router.navigate(['all_products'])
      
    })

  
    
   
    
    
  }

  get imgs() {
    return this.addForm.controls["images"] as FormArray;
  }

  onMoreImg(){
    this.imgs.push(new FormControl())
  }


}
