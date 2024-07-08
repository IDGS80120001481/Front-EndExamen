import { Routes } from '@angular/router';
import { MainComponent } from './store/components/main/main.component';
import { GaleryComponent } from './store/components/galery/galery.component';
import { ContactComponent } from './store/components/contact/contact.component';

export const routes: Routes = [
    {path: 'home', component: MainComponent},
    {path: 'product', component: GaleryComponent},
    {path: 'contact', component: ContactComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
];
