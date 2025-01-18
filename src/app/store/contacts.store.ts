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
  contacts: [
    {
      name: 'Kenneth Black',
      username: 'paula85',
      email: 'kmacdonald@hotmail.com',
      avatar: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
      selected: false,
      referralCount: 1,
    },
    {
      name: 'Valerie Davis',
      username: 'william04',
      email: 'vbrown@yahoo.com',
      avatar: 'https://randomuser.me/api/portraits/thumb/men/2.jpg',
      selected: false,
      referralCount: 2,
    },
    {
      name: 'Justin Ballard',
      username: 'denise65',
      email: 'jamesmunoz@gmail.com',
      avatar: 'https://randomuser.me/api/portraits/thumb/men/3.jpg',
      selected: false,
      referralCount: 3,
    },
    {
      name: 'Bernard Foster',
      username: 'hudsonmaria',
      email: 'vlittle@graham.biz',
      avatar: 'https://randomuser.me/api/portraits/thumb/men/4.jpg',
      selected: false,
      referralCount: 4,
    },
    {
      name: 'Charles Johnson',
      username: 'drakemark',
      email: 'leslie57@gmail.com',
      avatar: 'https://randomuser.me/api/portraits/thumb/men/5.jpg',
      selected: false,
      referralCount: 5,
    },
    {
      name: 'Maria Jones',
      username: 'lindarodriguez',
      email: 'josehaley@smith-conway.info',
      avatar: 'https://randomuser.me/api/portraits/thumb/men/6.jpg',
      selected: false,
      referralCount: 6,
    },
    {
      name: 'Dustin Burns',
      username: 'jacobjones',
      email: 'jeffreyruiz@hotmail.com',
      avatar: 'https://randomuser.me/api/portraits/thumb/men/7.jpg',
      selected: false,
      referralCount: 7,
    },
    {
      name: 'Joshua Robinson',
      username: 'fieldsrebecca',
      email: 'annfrench@yahoo.com',
      avatar: 'https://randomuser.me/api/portraits/thumb/men/8.jpg',
      selected: false,
      referralCount: 6,
    },
    {
      name: 'David Simpson',
      username: 'danielduffy',
      email: 'nicolemitchell@hotmail.com',
      avatar: 'https://randomuser.me/api/portraits/thumb/men/9.jpg',
      selected: false,
      referralCount: 5,
    },
    {
      name: 'Emily Leonard',
      username: 'nevans',
      email: 'tylercampbell@hotmail.com',
      avatar: 'https://randomuser.me/api/portraits/thumb/men/10.jpg',
      selected: false,
      referralCount: 4,
    },
  ]
};

export const ContactsStore = signalStore(
  withState(initialState),
)
