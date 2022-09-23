import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/interfaces/product';

import { FormGroup, FormControl,FormArray ,Validators } from '@angular/forms'
import { Category } from 'src/app/interfaces/category';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  product!: Product;
  id!: number;
  categories!: Category[]
  editForm: FormGroup = new FormGroup({
    title: new FormControl('',Validators.required),
    price: new FormControl('',Validators.required),
    description: new FormControl('',Validators.required),
    category: new FormControl('',Validators.required),
    images: new FormArray([
      new FormControl()
    ])
  });

 
  constructor(private productservice: ProductsService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];      
      this.productservice.getProduct(this.id).subscribe((theproduct) => {
        this.product = theproduct
        
        this.editForm.patchValue({
          title: this.product.title,
          price: this.product.price,
          description: this.product.description,
          images: this.product.images,
          category: this.product.category.id
          
        })
        
      }) 
    });

    this.productservice.getCategories().subscribe((categories) => {
      this.categories = categories
      
    })
      
    
  }

  onSubmit() {
    this.productservice.updateProduct(this.id, this.editForm.value).subscribe((product)=> {
      this.router.navigate(['/product', product.id])
    })
    
  }

  get imgs() {
    return this.editForm.controls["images"] as FormArray;
  }

  onMoreImg(){
    this.imgs.push(new FormControl())
  }

  onDelete(){
    this.productservice.deleteproduct(this.id).subscribe(()=>{
      this.router.navigate(['admin', 'edit_product'])
      
    })
  }


}
