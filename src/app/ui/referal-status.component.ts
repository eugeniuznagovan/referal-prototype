import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';

export interface ReferalStatus {
  firstCircle: number;
  secondCircle: number;
  thirdCircle: number;
}

@Component({
  selector: 'app-referal-status',
  imports: [IonIcon, NgClass],
  template: `
    @if (!referalStatus()) {
      <p>Loading...</p>
    } @else {
      <div class="circle circle-third">
        @let status = referalStatus()!; 

        <div class="circle circle-second">
          <div class="circle circle-first">
            <ion-icon [ngClass]="status.firstCircle === 1 ? 'green' : 'gray'" name="person-circle"></ion-icon>
            <ion-icon [ngClass]="status.firstCircle === 2 ? 'green' : 'gray'" name="person-circle"></ion-icon>
            <ion-icon [ngClass]="status.firstCircle === 3 ? 'green' : 'gray'" name="person-circle"></ion-icon>
          </div>
          <ion-icon [ngClass]="status.secondCircle === 1 ? 'green' : 'gray'" name="person-circle"></ion-icon>
          <ion-icon [ngClass]="status.secondCircle === 2 ? 'green' : 'gray'" name="person-circle"></ion-icon>
          <ion-icon [ngClass]="status.secondCircle === 3 ? 'green' : 'gray'" name="person-circle"></ion-icon>
          <ion-icon [ngClass]="status.secondCircle === 4 ? 'green' : 'gray'" name="person-circle"></ion-icon>
        </div>
        <ion-icon [ngClass]="status.thirdCircle === 1 ? 'green' : 'gray'" name="person-circle"></ion-icon>
        <ion-icon [ngClass]="status.thirdCircle === 2 ? 'green' : 'gray'" name="person-circle"></ion-icon>
        <ion-icon [ngClass]="status.thirdCircle === 3 ? 'green' : 'gray'" name="person-circle"></ion-icon>
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
      border-radius: 10px;
      align-items: center;
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
export class ReferalStatusComponent {
  referalStatus = input<ReferalStatus | undefined>(undefined);
}
