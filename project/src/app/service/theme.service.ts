import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

const html = document.querySelector('html');

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private theme: BehaviorSubject<string> = new BehaviorSubject('light');
  theme$: Observable<string> = this.theme.asObservable();
  constructor() {
    this.theme.subscribe((theme) => {
      html?.setAttribute('data-theme', theme);
    });
  }


  toggleTheme() {
    this.theme.next(this.theme.value === 'light' ? 'dark' : 'light');
  }

}
