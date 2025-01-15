import { Component, inject } from '@angular/core';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { AppStore } from '../store/app.store';

@Component({
  selector: 'app-resources',
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle],
  template: `
    <ion-header>
      <ion-toolbar [color]="appStore.isLightTheme() ? 'primary' : ''">
        <ion-title>Resources</ion-title>
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
          <ion-card-title>Resources</ion-card-title>
          <ion-card-subtitle>Manage your resources</ion-card-subtitle>
        </ion-card-header>
      </ion-card>
    </ion-content>
  `,
  styles: ``
})
export class ResourcesComponent {
  readonly appStore = inject(AppStore);
}
