import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  homeOutline,
  documentsOutline,
  heartOutline,
  createOutline,
  cashOutline,
  personCircle
} from 'ionicons/icons';

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
  constructor() {
    addIcons({
      homeOutline,
      documentsOutline,
      heartOutline,
      createOutline,
      cashOutline,
      personCircle
    });
  }
}
