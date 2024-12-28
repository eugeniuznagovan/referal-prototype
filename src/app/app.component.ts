import { Component } from '@angular/core';
import { IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  imports: [IonButton],
  template: `
   <ion-button color="primary">Click Me</ion-button>
  `,
  styles: ``
})
export class AppComponent {
  title = 'referal';
}
