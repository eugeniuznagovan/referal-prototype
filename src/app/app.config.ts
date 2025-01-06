import {
  ApplicationConfig,
  importProvidersFrom,
  provideExperimentalZonelessChangeDetection,
  provideZoneChangeDetection,
  InjectionToken,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { WebApp} from '@twa-dev/types';

export const TELEGRAM_WEB_APP = new InjectionToken<WebApp>('WindowToken', {
  providedIn: 'root',
  //@ts-ignore TODO: Remove ts-ignore
  factory: () => window.Telegram.WebApp,
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),
    provideIonicAngular({ mode: 'ios' }),
  ],
};
