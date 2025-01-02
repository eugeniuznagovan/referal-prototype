import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-resources',
 imports: [IonHeader, IonToolbar, IonTitle, IonContent],
  template: `
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Resources</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content></ion-content>
  `,
  styles: ``
})
export class ResourcesComponent {

}
