import { FiltersObject } from './../models/filters.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { environment } from '../../../environments/environment';

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) {}

  getProducts(filters: FiltersObject = {}): Observable<Product[]> {
    return this.http
      .get<Product[]>(`${environment.api_url}/products?
      ${this.setPriceFilter(filters)}${this.setCategoryFilter(filters)}${this.setStockFilter(filters)}`
      );
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${environment.api_url}/products`, product);
  }

  setFilters(filtersObj): string {
    let query = '';
    let priceQuery = '';
    let categoryQuery = '';
    let stockQuery = '';
  }

  setPriceFilter(filtersObj: FiltersObject): string {
    let query: string = '';
    if (filtersObj && filtersObj.price) {
      if (!filtersObj.price['from'] && !filtersObj.price['to']) {
        return query = '';
      }
      if (filtersObj.price['from'] || filtersObj.price['to']) {
        return query = `price=${filtersObj.price['from']} to ${filtersObj.price['to']}`;
      }
    }

    return query;
  }

  setCategoryFilter(filtersObj: FiltersObject): string {
    let query: string;
    if (filtersObj && filtersObj.category) {
      return query = `&category=${filtersObj.category}`;
    } else {
      return '';
    }
  }

  setStockFilter(filtersObj: FiltersObject): string{
    let query: string;
    if (filtersObj && filtersObj.stock) {
      return query = `&stock=${filtersObj.stock}`;
    } else {
      return '';
    }
  }
}
