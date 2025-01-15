import { Component, inject } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { cashOutline, createOutline, documentsOutline, heartOutline, homeOutline, personCircle, } from 'ionicons/icons';
import { AppStore } from './store/app.store';

@Component({
  selector: 'app-root',
  providers: [AppStore],
  imports: [IonRouterOutlet, IonApp],
  template: `
    <ion-app>
      <ion-router-outlet />
    </ion-app>
  `,
  styles: ``,
})
export class AppComponent {
  readonly appStore = inject(AppStore);

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
