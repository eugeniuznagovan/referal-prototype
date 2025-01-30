import { signalStore, withState } from '@ngrx/signals';

export interface Contact {
  name: string;
  username: string;
  email: string;
  avatar: string;
  selected: boolean;
  referralCount: number;
}

export interface ContactState {
  contacts: Contact[];
  loading: boolean;
}

const initialState: ContactState = {
  loading: true,
  contacts: [],
}

export const ContactsStore = signalStore(
  withState(initialState),
)
