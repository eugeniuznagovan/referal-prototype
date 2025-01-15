import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { InviteStatus } from '../store/contacts.store';


@Component({
  selector: 'app-invite-status',
  imports: [IonIcon, NgClass],
  template: `
    @if (!inviteStatus()) {
      <p>Loading...</p>
    } @else {
      <div class="circle circle-third">
        @let status = inviteStatus()!;

        <div class="circle circle-second">
          <div class="circle circle-first">
            <ion-icon [ngClass]="status.firstCircle === 1 ? 'green' : 'gray'" name="person-circle"></ion-icon>
            <ion-icon [ngClass]="status.firstCircle === 2 ? 'green' : 'gray'" name="person-circle"></ion-icon>
          </div>
          <ion-icon [ngClass]="status.secondCircle === 1 ? 'green' : 'gray'" name="person-circle"></ion-icon>
          <ion-icon [ngClass]="status.secondCircle === 2 ? 'green' : 'gray'" name="person-circle"></ion-icon>
          <ion-icon [ngClass]="status.secondCircle === 3 ? 'green' : 'gray'" name="person-circle"></ion-icon>
        </div>
        <div style="display: flex; align-items: center; padding-right: 3px;">
          <ion-icon [ngClass]="status.thirdCircle === 1 ? 'green' : 'gray'" name="person-circle"></ion-icon>
          <ion-icon [ngClass]="status.thirdCircle === 2 ? 'green' : 'gray'" name="person-circle"></ion-icon>
        </div>
      </div>
    }
  `,
  styles: `
    ion-icon {
      border-radius: 10px;
    }

    ion-icon.green {
      background: var(--ion-color-strong-green);
      color: var(--ion-color-light-green);
    }

    ion-icon.gray {
      background: var(--ion-color-light);
      color: var(--ion-color-normal-gray);
    }

    .circle {
      display: flex;
      padding: 3px;
      border-radius: 12px;
      align-items: center;
      margin-right: 2px;
    }

    .circle-third {
      background: var(--ion-color-strong-blue);

    }

    .circle-second {
      background: var(--ion-color-normal-blue);
    }

    .circle-first {
      background: var(--ion-color-light-blue);
    }
  `,
})
export class InviteStatusComponent {
  inviteStatus = input<InviteStatus | undefined>(undefined);
}
