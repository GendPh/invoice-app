import { Component } from '@angular/core';
import { ThemeService } from '../service/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  public theme: string = 'light';

  constructor(private themeService: ThemeService) {
    this.themeService.theme$.subscribe((theme) => {
      this.theme = theme;
    });
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
