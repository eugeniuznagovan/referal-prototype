import { signalStore, withState } from '@ngrx/signals';
import { WebAppUser } from '@twa-dev/types';
import { inject, isDevMode } from '@angular/core';
import { TWA_TOKEN } from '../app.config';

interface TelegramState {
  user: WebAppUser | undefined;
  theme: 'dark' | 'light';
}

const initialState: TelegramState = {
  user: undefined,
  theme: 'light'
}

const mockedInitialState: TelegramState = {
  user: {
    id: 123456789,
    is_bot: false,
    first_name: "John",
    last_name: "Doe",
    username: "johndoe",
    language_code: "en",
    is_premium: true,
    photo_url: "https://example.com/photo.jpg",
  },
  theme: 'light'
};

const TelegramStore = signalStore(
  withState((twaService = inject(TWA_TOKEN)) => {
    if (isDevMode()) {
      return {
        user: {
          id: 123456789,
          is_bot: false,
          first_name: "John",
          last_name: "Doe",
          username: "johndoe",
          language_code: "en",
          is_premium: true,
          photo_url: "https://example.com/photo.jpg",
        },
        theme: 'light'
      }
    }

    const user = twaService?.initDataUnsafe?.user;

    if (!user) {
      throw new Error('Failed to get telegram user');
    }

    return {
      user,
      theme: twaService.colorScheme,
    }
  })
);
