import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { inject } from '@angular/core';
import { ApiService } from '../services/api.service';

export interface Contact {
  id: number | string;
  first_name: string;
  photo_url: string;
  username?: string;
}

export interface ContactState {
  contacts: Contact[];
  loading: boolean;
  error: string | undefined;
}

const initialState: ContactState = {
  loading: true,
  contacts: [],
  error: undefined
};

export const ContactsStore = signalStore(
  withState(initialState),
  withMethods((store, apiService = inject(ApiService)) => ({
    async getContacts(userId: number) {
      try {
        patchState(store, state => ({...state, loading: true}));
        const contacts = await apiService.getContacts(userId);
        patchState(store, state => ({...state, contacts, loading: false}));
      } catch (e) {
        patchState(store, state => ({...state, error: 'Failed to fetch contacts.', loading: false}));
      }
    }
  }))
);
