import { Component } from '@angular/core';
import { NewInvoiceComponent } from '../new-invoice/new-invoice.component';

@Component({
  selector: 'app-home-header',
  standalone: true,
  imports: [NewInvoiceComponent],
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.css'
})
export class HomeHeaderComponent {

}
