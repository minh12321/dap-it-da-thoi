import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../api-sevice/san_pham.model';
import { environment } from '../app/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/api/products`);
  }

  // getProducts(): Observable<Product[]> {
  //   return this.http.get<Product[]>(`${this.apiUrl}/api/products`);
  // }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/api/products/${id}`);
  }


  addProduct(product: Product, file: File): Observable<Product> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    formData.append('product', JSON.stringify(product));

    return this.http.post<Product>(`${this.apiUrl}/api/products`, formData);
  }


  updateProduct(id: string, product: Product, file: File | null): Observable<Product> {
    const formData = new FormData();
    formData.append('product', new Blob([JSON.stringify(product)], { type: 'application/json' }));
    if (file) {
      formData.append('file', file);
    }
    return this.http.put<Product>(`${this.apiUrl}/api/products/${id}`, formData);
  }

  deleteProduct(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/api/products/${id}`);
  }
}
