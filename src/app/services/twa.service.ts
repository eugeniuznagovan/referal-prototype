import { inject, Injectable, isDevMode } from '@angular/core';
import { TWA_TOKEN } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class TwaService {
  twa = inject(TWA_TOKEN);

  constructor() {
    if (!isDevMode()) {
      this.twa.ready();
      this.twa.requestFullscreen();
    }
  }
}
