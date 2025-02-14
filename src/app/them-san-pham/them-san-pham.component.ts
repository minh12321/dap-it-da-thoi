import { Component } from '@angular/core';
import { ProductService } from '../../api-sevice/san_pham.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../api-sevice/san_pham.model';

@Component({
  selector: 'app-them-san-pham',
  templateUrl: './them-san-pham.component.html',
  styleUrl: './them-san-pham.component.css'
})
export class ThemSanPhamComponent {
  products: Product[] = [];
  newProduct: Product = new Product();
  file: File | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.productService.getAllProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.error('Error fetching products', error);
      }
    );
  }

  addProduct(): void {
    if (this.file) {
      this.productService.addProduct(this.newProduct, this.file).subscribe(
        (data) => {
          this.products.push(data); 
          this.resetForm();
        },
        (error) => {
          console.error('Error adding product', error);
        }
      );
    }
  }

  onFileChange(event: any): void {
    this.file = event.target.files[0];
  }

  resetForm(): void {
    this.newProduct = new Product();
    this.file = null;
  }
  // -----------------------

  // products: Product[] = [];


  // ngOnInit(): void {
  //   this.loadProducts();
  // }

  // loadProducts(): void {
  //   this.productService.getProducts().subscribe(data => {
  //     this.products = data;
  //   });
  // }

  // deleteProduct(id: string): void {
  //   if (confirm('Bạn có chắc muốn xóa sản phẩm này?')) {
  //     this.productService.deleteProduct(id).subscribe(() => {
  //       this.loadProducts();
  //     });
  //   }
  // }
}


