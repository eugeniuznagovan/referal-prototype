import { Component } from '@angular/core';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonTitle, IonToolbar, } from '@ionic/angular/standalone';

@Component({
  selector: 'app-earn',
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle],
  template: `
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Earn</ion-title>
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
          <ion-card-title>Earn</ion-card-title>
          <ion-card-subtitle>Money & Rewards</ion-card-subtitle>
        </ion-card-header>
      </ion-card>
    </ion-content>
  `,
  styles: ``,
})
export class EarnComponent {}
