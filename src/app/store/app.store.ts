import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from '@ngrx/signals';
import { computed, inject, isDevMode } from '@angular/core';
import { WebAppUser } from '@twa-dev/types';
import { TWA_TOKEN } from '../app.config';

export type Theme = 'light' | 'dark';

export interface AppState {
  theme: Theme,
  user: WebAppUser;
}

export const AppStore = signalStore(
  withState((twaService = inject(TWA_TOKEN)): AppState => {
    if (isDevMode()) {
      return {
        theme: 'light',
        user: {
          id: 551025685,
          is_bot: false,
          first_name: "John",
          last_name: "Doe",
          username: "johndoe",
          language_code: "en",
          is_premium: true,
          photo_url: "https://example.com/photo.jpg",
        },
      }
    }

    const user = twaService?.initDataUnsafe?.user;

    if (!user) {
      throw new Error('The app can work only as a telegram mini app');
    }

    return {
      theme: twaService.colorScheme,
      user: user
    }
  }),
  withComputed(({theme}) => ({
    isLightTheme: computed(() => theme() === 'light')
  })),
  withMethods(store => ({
    setTheme(theme: Theme) {
      patchState(store, state => ({...state, theme}));
      document.documentElement.classList.toggle('ion-palette-dark', theme === 'dark');
    }
  })),
  withHooks({
    onInit(store) {
      store.setTheme(store.theme());
    }
  })
)
