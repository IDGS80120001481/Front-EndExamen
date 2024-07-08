import { Component } from '@angular/core';
import { IProduct } from '../../interfaces/Product.';
import { ProductsService } from '../../api/products.service';
import { StoreModule } from '../../store.module';
import { filter } from 'rxjs';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrl: './galery.component.css'
})
export class GaleryComponent {
  listaProductos: IProduct[] = [];
  isResultLoades = false;
  isUpdateFormActive = false;
  searchValue: string = '';

  constructor(private _productService: ProductsService){
    this.allProducts();
  }

  allProducts(){
    this._productService.getList().subscribe({
      next: (data) => {
        this.listaProductos = data;
        this.isResultLoades = true;
      }, error:(e) => {
        console.log(e);
      }
    });
  }

  filterProducts(word: string) {
    this._productService.getList().subscribe({
      next: (data) => {
        this.listaProductos = data.filter(producto => {
          return producto.nombre.toLowerCase().includes(word.toLowerCase());
        });
        this.isResultLoades = true;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  searchChange(event: any): void {
    if (event.target) {
      this.searchValue = event.target.value;
      this.filterProducts(this.searchValue);
    }
  }

  filterProductsCategory(event: any){
    this._productService.getList().subscribe({
      next: (data) => {
        this.listaProductos = data.filter(producto => {
          return producto.categoria.toLowerCase().includes(event.target.value.toLowerCase());
        });
        this.isResultLoades = true;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }
}
