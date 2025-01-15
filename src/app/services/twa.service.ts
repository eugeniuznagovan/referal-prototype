import { inject, Injectable, isDevMode } from '@angular/core';
import { TWA_TOKEN } from '../app.config';
import { SafeAreaInset } from '@twa-dev/types';

@Injectable({
  providedIn: 'root'
})
export class TwaService {
  twa = inject(TWA_TOKEN);
  
  constructor() {
    if(!isDevMode()) {
      this.twa.ready();
      this.twa.requestFullscreen(); 
    }
  }

  getSafeAreaInset(): Readonly<SafeAreaInset> {
    return this.twa.safeAreaInset;
  }

  requestFullScreen() {
    this.twa.requestFullscreen();
  }
}
