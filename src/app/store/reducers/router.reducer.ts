import {
  ACTIVATE_SHOP,
  ACTIVATE_LOGIN,
  ACTIVATE_REGISTER,
  RouterActions
} from '../actions';
import { Params } from '@angular/router';

export class StoreRouterConfig {
  public stateKey?: string;
}

export class RouterStateUrl {
  public url: string;
  public queryParams: Params;
  public params: any;
}

export const initialRouterStateUrl: RouterStateUrl = {
  url: '',
  queryParams: {
    stateKey: ''
  },
  params: ''
};

export function routerReducer(state: RouterStateUrl = initialRouterStateUrl, action: RouterActions): RouterStateUrl {
  switch (action.type) {
    case ACTIVATE_SHOP: {
      return {
        ...state,
        url: 'shop',
        // ?
      };
    }
    case ACTIVATE_LOGIN: {
      return {
        ...state,
        url: 'login',
        // ?
      };
    }
    case ACTIVATE_REGISTER: {
      return {
        ...state,
        url: 'register',
        // ?
      };
    }
    default: {
      return state;
    }
  }
}
