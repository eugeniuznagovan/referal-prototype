import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-earn',
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
  template: `
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Earn</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content></ion-content>
  `,
  styles: ``,
})
export class EarnComponent {}
