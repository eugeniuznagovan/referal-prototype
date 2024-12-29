import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-wish',
 imports: [IonHeader, IonToolbar, IonTitle, IonContent],
  template: `
    <ion-header color="primary">
      <ion-toolbar>
        <ion-title>Wish</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content></ion-content>
  `,
  styles: ``
})
export class WishComponent {

}
