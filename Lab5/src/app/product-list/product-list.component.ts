import { Component } from '@angular/core';

import {Product, products} from '../products';
import {Category} from "../category";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})


export class ProductListComponent {
  categories: Category[] = [
    {name: 'Все'},
    {name: 'Смартфоны'},
    {name: 'Компьютеры и оргтехника'},
    {name: 'Аудио и видео'},
    {name: 'Бытовая техника'},
    {name: 'Мебель'},
    {name: 'Красота и здоровье'},
  ];
  selectedCategory?: Category;

  products: Product[] = products;

  liked = false;


  setCategory(category: Category) {
    if(category.name == 'Все'){
      this.selectedCategory = undefined;
      return;
    }
    this.selectedCategory = category;
  }
  deleteProduct(product: Product) {
    this.products = this.products.filter(p => p !== product);
  }

  get filteredProducts(): Product[] {
    return this.selectedCategory ? this.products.filter(product => product.category.name === this.selectedCategory?.name) : this.products;
  }
  likeProduct(product: Product) {
    if(this.liked == false)
    {
      product.likes+= 1;
      window.alert('You liked this product!');
      this.liked = true;
    }
    else
    {
      product.likes-= 1;
      window.alert('You unliked this product!')
      this.liked = false;
    }
  }

  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
