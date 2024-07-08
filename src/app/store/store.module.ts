import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsService } from './api/products.service';
import { MainComponent } from './components/main/main.component';
import { GaleryComponent } from './components/galery/galery.component';
import { ContactComponent } from './components/contact/contact.component';



@NgModule({
  declarations: [
    MainComponent,
    GaleryComponent,
    ContactComponent
  ],
  imports: [
    CommonModule, 
    FormsModule
  ],exports:[
    MainComponent,
    GaleryComponent,
    ContactComponent
  ], providers: [
    ProductsService
  ]
})
export class StoreModule { }
