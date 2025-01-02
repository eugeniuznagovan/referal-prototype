import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonBackButton,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonButton,
  IonInput,
  IonSearchbar,
  IonList,
  IonListHeader,
  IonItem,
  IonAvatar,
  IonCheckbox,
} from '@ionic/angular/standalone';
import {
  ReferalStatus,
  ReferalStatusComponent,
} from '../ui/referal-status.component';

@Component({
  selector: 'app-contacts',
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
    NgFor,
    IonCheckbox,
    FormsModule,
    ReferalStatusComponent,
  ],
  template: `
    <ion-header>
      <ion-toolbar color="primary">
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
          (ionInput)="filterUsers()"
          placeholder="Search Users"
        ></ion-searchbar>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <!-- Scrollable List -->
      <ion-list>
        <ion-list-header>
          <ion-label>Friends list</ion-label>
        </ion-list-header>
        <ion-item
          detail="false"
          *ngFor="let user of filteredUsers"
          button
          (click)="user.selected = !user.selected"
        >
          <ion-avatar slot="start">
            <img [src]="user.avatar" alt="User Avatar" />
          </ion-avatar>
          <ion-label class="username-container">
            <h3>{{ user.name }}</h3>
            <p>{{ user.username }}</p>
          </ion-label>
          <ion-label>
            <app-referal-status
              [referalStatus]="user.referalStatus"
            ></app-referal-status>
          </ion-label>
          <ion-checkbox slot="end" [(ngModel)]="user.selected"></ion-checkbox>
        </ion-item>
      </ion-list>
    </ion-content>
  `,
  styles: `
    ion-content {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .username-container {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  `,
})
export class ContactsComponent {
  referalStatus: ReferalStatus = {
    firstCircle: 1,
    secondCircle: 1,
    thirdCircle: 1,
  };

  users = [
    {
      name: 'Kenneth Black',
      username: 'paula85',
      email: 'kmacdonald@hotmail.com',
      avatar: 'https://via.placeholder.com/50',
      selected: false,
      referalStatus: this.referalStatus,
    },
    {
      name: 'Valerie Davis',
      username: 'william04',
      email: 'vbrown@yahoo.com',
      avatar: 'https://via.placeholder.com/50',
      selected: false,
      referalStatus: this.referalStatus,
    },
    {
      name: 'Justin Ballard',
      username: 'denise65',
      email: 'jamesmunoz@gmail.com',
      avatar: 'https://via.placeholder.com/50',
      selected: false,
      referalStatus: this.referalStatus,
    },
    {
      name: 'Bernard Foster',
      username: 'hudsonmaria',
      email: 'vlittle@graham.biz',
      avatar: 'https://via.placeholder.com/50',
      selected: false,
      referalStatus: this.referalStatus,
    },
    {
      name: 'Charles Johnson',
      username: 'drakemark',
      email: 'leslie57@gmail.com',
      avatar: 'https://via.placeholder.com/50',
      selected: false,
      referalStatus: this.referalStatus,
    },
    {
      name: 'Maria Jones',
      username: 'lindarodriguez',
      email: 'josehaley@smith-conway.info',
      avatar: 'https://via.placeholder.com/50',
      selected: false,
      referalStatus: this.referalStatus,
    },
    {
      name: 'Dustin Burns',
      username: 'jacobjones',
      email: 'jeffreyruiz@hotmail.com',
      avatar: 'https://via.placeholder.com/50',
      selected: false,
      referalStatus: this.referalStatus,
    },
    {
      name: 'Joshua Robinson',
      username: 'fieldsrebecca',
      email: 'annfrench@yahoo.com',
      avatar: 'https://via.placeholder.com/50',
      selected: false,
      referalStatus: this.referalStatus,
    },
    {
      name: 'David Simpson',
      username: 'danielduffy',
      email: 'nicolemitchell@hotmail.com',
      avatar: 'https://via.placeholder.com/50',
      selected: false,
      referalStatus: this.referalStatus,
    },
    {
      name: 'Emily Leonard',
      username: 'nevans',
      email: 'tylercampbell@hotmail.com',
      avatar: 'https://via.placeholder.com/50',
      selected: false,
      referalStatus: this.referalStatus,
    },
  ];

  filteredUsers = [...this.users]; // Filtered users for display
  searchQuery: string = ''; // Holds the current search query
  selectedUser: any = null; // Holds the selected user

  onUserSelect(event: any): void {
    event.detail.selected = event.detail.selected;
  }

  filterUsers(): void {
    const query = this.searchQuery.toLowerCase();
    this.filteredUsers = this.users.filter(
      (user) =>
        user.name.toLowerCase().includes(query) ||
        user.username.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query),
    );
  }
}
