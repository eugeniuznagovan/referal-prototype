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
export class AppComponent {
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
}
