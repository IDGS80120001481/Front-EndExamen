import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  email: string = 'gcm1200yt@gmail.com';
  phone: string = '+52 479 217 2636';
  street: string = 'Blvd Antonio Madrazo #612';
  address: string = 'San Jose del consuelo #II';
  city: string =  'Leon Guanajuato';
}
