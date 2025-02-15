import { Component, inject } from '@angular/core';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { AppStore } from '../store/app.store';

@Component({
  selector: 'app-wish',
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle],
  template: `
    <ion-header>
      <ion-toolbar [color]="appStore.isLightTheme() ? 'primary' : ''">
        <ion-title>Wish</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card>
        <img
          width="355"
          height="178"
          alt="Silhouette of mountains"
          src="https://ionicframework.com/docs/img/demos/card-media.png"
        />
        <ion-card-header>
          <ion-card-title>Wish</ion-card-title>
          <ion-card-subtitle>Review your wishes</ion-card-subtitle>
        </ion-card-header>
      </ion-card>
    </ion-content>
  `,
  styles: ``
})
export class WishComponent {
  readonly appStore = inject(AppStore);
}
