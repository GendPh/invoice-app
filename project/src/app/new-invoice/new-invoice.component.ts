import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-new-invoice',
  standalone: true,
  imports: [],
  templateUrl: './new-invoice.component.html',
  styleUrl: './new-invoice.component.css'
})
export class NewInvoiceComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const headerContainer = document.querySelector('header');
    const newInvoiceContainer = document.getElementById("new-invoice-container");

    newInvoiceContainer?.style.setProperty('top', `${headerContainer?.clientHeight! - 1}px`);
  }
}
