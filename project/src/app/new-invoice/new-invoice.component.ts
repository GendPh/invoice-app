import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-new-invoice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-invoice.component.html',
  styleUrl: './new-invoice.component.css'
})
export class NewInvoiceComponent implements AfterViewInit {

  public isVisible: boolean = false;

  ngAfterViewInit(): void {
    const headerContainer = document.querySelector('header');
    const newInvoiceContainer = document.getElementById("new-invoice-container");

    newInvoiceContainer?.style.setProperty('top', `${headerContainer?.clientHeight! - 1}px`);
  }

  public Visible(): void {
    this.isVisible = true;
  }
  public Hidden(): void {
    this.isVisible = false;
  }
}
