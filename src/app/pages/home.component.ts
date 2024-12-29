import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonNavLink
} from '@ionic/angular/standalone';
import { ContactsComponent } from './contacts.component';

@Component({
  selector: 'app-home',
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardTitle, IonCardHeader, IonCardContent, IonCardSubtitle, IonButton, RouterLink, IonNavLink],
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
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
          <ion-card-title>Contacts</ion-card-title>
          <ion-card-subtitle>Invite your friends!</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          <ion-button routerLink="contacts">Navigate</ion-button>
        </ion-card-content>
      </ion-card>
    </ion-content>
  `,
  styles: ``,
})
export class HomeComponent {
  component = ContactsComponent
}
