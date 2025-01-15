import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from '@ngrx/signals';
import { computed, inject } from '@angular/core';
import { TwaService } from '../services/twa.service';

export type Theme = 'light' | 'dark';

export interface App {
  theme: Theme
}

export const initialState: App = {
  theme: 'light',
};

export const AppStore = signalStore(
  withState(initialState),
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
    onInit(store, twaService = inject(TwaService)) {
      store.setTheme(twaService.twa.colorScheme);
    }
  })
)
