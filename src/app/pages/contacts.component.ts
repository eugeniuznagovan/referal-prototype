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
  IonRadioGroup,
  IonAvatar,
  IonRadio,
  IonCheckbox,
} from '@ionic/angular/standalone';

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
    IonButton,
    IonInput,
    IonSearchbar,
    IonList,
    IonListHeader,
    IonItem,
    IonRadioGroup,
    IonAvatar,
    IonRadio,
    NgFor,
    IonCheckbox,
    FormsModule,
  ],
  template: `
    <ion-header>
      <ion-toolbar>
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
          placeholder="Search Users"></ion-searchbar>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <!-- Scrollable List -->
      <ion-list>
        <ion-list-header>
          <ion-label>Friends list</ion-label>
        </ion-list-header>
        <ion-item
          *ngFor="let user of filteredUsers"
          button
          (click)="user.selected = !user.selected"
        >
          <ion-avatar slot="start">
            <img [src]="user.avatar" alt="User Avatar" />
          </ion-avatar>
          <ion-label>
            <h2>{{ user.name }}</h2>
            <p>{{ user.username }}</p>
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
  `,
})
export class ContactsComponent {
  users = [
    {
      name: 'Kenneth Black',
      username: 'paula85',
      email: 'kmacdonald@hotmail.com',
      avatar: 'https://via.placeholder.com/50',
      selected: false,
    },
    {
      name: 'Valerie Davis',
      username: 'william04',
      email: 'vbrown@yahoo.com',
      avatar: 'https://via.placeholder.com/50',
      selected: false,
    },
    {
      name: 'Justin Ballard',
      username: 'denise65',
      email: 'jamesmunoz@gmail.com',
      avatar: 'https://via.placeholder.com/50',
      selected: false,
    },
    {
      name: 'Bernard Foster',
      username: 'hudsonmaria',
      email: 'vlittle@graham.biz',
      avatar: 'https://via.placeholder.com/50',
      selected: false,
    },
    {
      name: 'Charles Johnson',
      username: 'drakemark',
      email: 'leslie57@gmail.com',
      avatar: 'https://via.placeholder.com/50',
      selected: false,
    },
    {
      name: 'Maria Jones',
      username: 'lindarodriguez',
      email: 'josehaley@smith-conway.info',
      avatar: 'https://via.placeholder.com/50',
      selected: false,
    },
    {
      name: 'Dustin Burns',
      username: 'jacobjones',
      email: 'jeffreyruiz@hotmail.com',
      avatar: 'https://via.placeholder.com/50',
      selected: false,
    },
    {
      name: 'Joshua Robinson',
      username: 'fieldsrebecca',
      email: 'annfrench@yahoo.com',
      avatar: 'https://via.placeholder.com/50',
      selected: false,
    },
    {
      name: 'David Simpson',
      username: 'danielduffy',
      email: 'nicolemitchell@hotmail.com',
      avatar: 'https://via.placeholder.com/50',
      selected: false,
    },
    {
      name: 'Emily Leonard',
      username: 'nevans',
      email: 'tylercampbell@hotmail.com',
      avatar: 'https://via.placeholder.com/50',
      selected: false,
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
        user.email.toLowerCase().includes(query)
    );
  }
}
