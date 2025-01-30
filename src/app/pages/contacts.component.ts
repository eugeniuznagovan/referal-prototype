import { Component, computed, inject, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonAvatar,
  IonBackButton,
  IonButton,
  IonButtons,
  IonCheckbox,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToast,
  IonToolbar
} from '@ionic/angular/standalone';
import { InviteStatusComponent, } from '../ui/invite-status.component';
import { ContactsStore } from '../store/contacts.store';
import { AppStore } from '../store/app.store';
import { Clipboard } from '@angular/cdk/clipboard';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-contacts',
  providers: [
    ContactsStore
  ],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonSearchbar,
    IonList,
    IonListHeader,
    IonItem,
    IonAvatar,
    IonCheckbox,
    FormsModule,
    InviteStatusComponent,
    IonButton,
    IonToast,

  ],
  template: `
    <ion-header>
      <ion-toolbar [color]="appStore.isLightTheme() ? 'primary' : ''">
        <ion-buttons slot="start">
          <ion-back-button defaultHref="home"></ion-back-button>
        </ion-buttons>
        <ion-title>Contacts</ion-title>
      </ion-toolbar>
      <ion-toolbar>
        <ion-list>
          <ion-item>
            <ion-label>Your Contacts are your resources</ion-label>
            <ion-label slot="end">9</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Your Contacts are your resources</ion-label>
            <ion-label slot="end">5</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Already Recommended</ion-label>
            <ion-label slot="end">2</ion-label>
          </ion-item>
        </ion-list>
      </ion-toolbar>
      <ion-toolbar>
        <ion-segment value="default">
          <ion-segment-button value="default">
            <ion-label>All Friends</ion-label>
          </ion-segment-button>
          <ion-segment-button value="segment">
            <ion-label>Select</ion-label>
          </ion-segment-button>
        </ion-segment>
      </ion-toolbar>
      <ion-toolbar>
        <ion-searchbar
          [(ngModel)]="searchQuery"
          placeholder="Search Users"
        ></ion-searchbar>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-list-header>
          <ion-label>Friends list</ion-label>
        </ion-list-header>

        @for (contact of filteredContacts(); track contact.username) {
          <ion-item
            #item
            detail="false"
            button
            (click)="checkbox.checked = !checkbox.checked"
          >
            <ion-avatar>
              <img [src]="contact.avatar" alt="User Avatar"/>
            </ion-avatar>
            <ion-label style="margin-left: 1rem; text-overflow: elipsis; overflow: hidden; white-space: nowrap;">
              <h3>{{ contact.name }}</h3>
              <p>{{ contact.username }}</p>
            </ion-label>
            <app-invite-status [referralCount]="contact.referralCount" style="margin-right: 1rem"/>
            <ion-checkbox #checkbox slot="end"/>
          </ion-item>
        } @empty {
          <ion-item>
            <ion-label>No results found.</ion-label>
            <ion-button (click)="copyUserId()" id="open-toast" slot="end">Invite</ion-button>
            <ion-toast trigger="open-toast" message="Link copied 🔗" [duration]="3000"></ion-toast>
          </ion-item>
        }
      </ion-list>
    </ion-content>
  `,
  styles: `
    ion-content {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
  `,
})
export class ContactsComponent {
  contactsStore = inject(ContactsStore);
  appStore = inject(AppStore);
  clipboard = inject(Clipboard);

  searchQuery = model('');

  filteredContacts = computed(() => {
    const query = this.searchQuery().toLowerCase();

    return this.contactsStore.contacts().filter(contact => {
      return contact.name.toLowerCase().includes(query) ||
        contact.username.toLowerCase().includes(query) ||
        contact.email.toLowerCase().includes(query)
    });
  })

  copyUserId() {
    const inviteLink = `${environment.botUrl}?start=${this.appStore.user().id}`;
    this.clipboard.copy(inviteLink);
  }
}
