import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

const html = document.querySelector('html');

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private theme: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(' ');
  theme$: Observable<string | null> = this.theme.asObservable();
  
  constructor() {
    this.theme$.subscribe((theme) => {
      html?.setAttribute('data-theme', theme!);
    } );
  }


  toggleTheme() {
    if(html?.classList.contains('dark')) {
      html?.classList.remove('dark'); 
      this.theme.next('light');
    }else {
      html?.classList.add('dark');
      this.theme.next('dark');
    }
  }

}
