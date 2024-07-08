import { Component } from '@angular/core';
import { ProductsService } from '../../api/products.service';
import { IProduct } from '../../interfaces/Product.';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  listaProductos: IProduct[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;

  constructor(private _productService: ProductsService) {}

  ngOnInit() {
    this.obtenerTareas();
  }

  obtenerTareas() {
    this._productService.getList().subscribe({
      next: (data) => {
        this.listaProductos = data;
        this.isResultLoaded = true;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }
}
