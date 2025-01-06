import { Component, inject, OnInit, Renderer2 } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  homeOutline,
  documentsOutline,
  heartOutline,
  createOutline,
  cashOutline,
  personCircle,
} from 'ionicons/icons';
import { TwaService } from './services/twa.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [IonRouterOutlet, IonApp],
  template: `
    <ion-app>
      <ion-router-outlet />
    </ion-app>
  `,
  styles: ``,
})
export class AppComponent implements OnInit {
  twaService = inject(TwaService);
  renderer = inject(Renderer2);
  document = inject(DOCUMENT);

  constructor() {
    addIcons({
      homeOutline,
      documentsOutline,
      heartOutline,
      createOutline,
      cashOutline,
      personCircle,
    });
  }

  ngOnInit(): void {
    const inset = this.twaService.getSafeAreaInset();
    this.document.documentElement.style.setProperty('--safe-area-inset-left', inset.left.toString());
    this.document.documentElement.style.setProperty('--safe-area-inset-right', inset.right.toString());
    this.document.documentElement.style.setProperty('--safe-area-inset-top', inset.top.toString());
    this.document.documentElement.style.setProperty('--safe-area-inset-bottom', inset.bottom.toString());

    this.twaService.requestFullScreen();
  }
}
