import { createContext } from 'react';

export const AuthContext = createContext({
  isLoggedIn: false,
  login: () => { },
  logout: () => { },
  show_auth_modal: false,
  set_show_auth_modal: () => { },
  unset_show_auth_modal: () => { },
  show_login_modal: false,
  set_show_login_modal: () => { },
  unset_show_login_modal: () => { },
  show_signup_modal: false,
  set_show_signup_modal: () => { },
  unset_show_signup_modal: () => { },
  users: {},
  set_user: () => { },
});
