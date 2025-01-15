import { Component, inject } from '@angular/core';
import { IonIcon, IonTabBar, IonTabButton, IonTabs, } from '@ionic/angular/standalone';
import { AppStore } from './store/app.store';

@Component({
  selector: 'app-shell',
  imports: [IonTabBar, IonTabs, IonIcon, IonTabButton],
  template: `
      <ion-tabs>
        <ion-tab-bar slot="bottom" [color]="appStore.isLightTheme() ? 'primary' : ''">
          <ion-tab-button tab="home">
            <ion-icon name="home-outline"></ion-icon>
            Home
          </ion-tab-button>
          <ion-tab-button tab="resources">
            <ion-icon name="documents-outline"></ion-icon>
            Resources
          </ion-tab-button>
          <ion-tab-button tab="wish">
            <ion-icon name="heart-outline"></ion-icon>
            Wish
          </ion-tab-button>
          <ion-tab-button tab="other">
            <ion-icon name="create-outline"></ion-icon>
            Others
          </ion-tab-button>
          <ion-tab-button tab="earn">
            <ion-icon name="cash-outline"></ion-icon>
            Earn
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
  `,
  styles: ``,
})
export class ShellComponent {
  appStore = inject(AppStore);
}
