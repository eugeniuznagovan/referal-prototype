import { Component } from '@angular/core';
import {
  IonButton,
  IonTab,
  IonToolbar,
  IonTabs,
  IonHeader,
  IonTitle,
  IonContent,
  IonTabButton,
  IonIcon,
  IonTabBar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  homeOutline,
  documentsOutline,
  heartOutline,
  createOutline,
  cashOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  imports: [
    IonButton,
    IonTab,
    IonTabs,
    IonToolbar,
    IonHeader,
    IonTitle,
    IonContent,
    IonTabButton,
    IonIcon,
    IonTabBar,
  ],
  template: `
    <ion-tabs>
      <ion-tab tab="home">
        <div id="home-page">
          <ion-header>
            <ion-toolbar>
              <ion-title>Home</ion-title>
            </ion-toolbar>
          </ion-header>
          <ion-content>
            <div class="example-content">Home</div>
          </ion-content>
        </div>
      </ion-tab>
      <ion-tab tab="resources">
        <div id="resources-page">
          <ion-header>
            <ion-toolbar>
              <ion-title>Resources</ion-title>
            </ion-toolbar>
          </ion-header>
          <ion-content>
            <div class="example-content">Resources</div>
          </ion-content>
        </div>
      </ion-tab>
      <ion-tab tab="wish">
        <div id="wish-page">
          <ion-header>
            <ion-toolbar>
              <ion-title>Wish</ion-title>
            </ion-toolbar>
          </ion-header>
          <ion-content>
            <div class="example-content">Wish</div>
          </ion-content>
        </div>
      </ion-tab>
      <ion-tab tab="other">
        <div id="other-page">
          <ion-header>
            <ion-toolbar>
              <ion-title>Others</ion-title>
            </ion-toolbar>
          </ion-header>
          <ion-content>
            <div class="example-content">Others</div>
          </ion-content>
        </div>
      </ion-tab>
      <ion-tab tab="earn">
        <div id="earn-page">
          <ion-header>
            <ion-toolbar>
              <ion-title>Earn</ion-title>
            </ion-toolbar>
          </ion-header>
          <ion-content>
            <div class="example-content">Earn</div>
          </ion-content>
        </div>
      </ion-tab>

      <ion-tab-bar slot="bottom">
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
          Other
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
export class AppComponent {
  title = 'referal';

  constructor() {
    addIcons({ homeOutline, documentsOutline, heartOutline, createOutline, cashOutline });
  }
}
