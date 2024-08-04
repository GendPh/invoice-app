import {  Component } from '@angular/core';
import { HomeHeaderComponent } from '../home-header/home-header.component';
import { InvoicesComponent } from '../invoices/invoices.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeHeaderComponent, InvoicesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

