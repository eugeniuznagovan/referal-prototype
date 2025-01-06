import { inject, Injectable } from '@angular/core';
import WebApp from '@twa-dev/sdk';
import { TWA_TOKEN } from '../app.config';
import { SafeAreaInset } from '@twa-dev/types';

@Injectable({
  providedIn: 'root'
})
export class TwaService {
  twa = inject(TWA_TOKEN);
  
  constructor() {
    this.twa.ready();    
  }

  getSafeAreaInset(): Readonly<SafeAreaInset> {
    return this.twa.safeAreaInset;
  }

  requestFullScreen() {
    this.twa.requestFullscreen();
  }
}
