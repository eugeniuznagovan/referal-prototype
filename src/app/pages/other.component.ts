import { Component } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-other',
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
  template: `
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Other</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content></ion-content>
  `,
  styles: ``,
})
export class OtherComponent {}
