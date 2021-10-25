import { AccountState, AccountActionTypes, LOGIN_REQUEST, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from './types';
const initialState: AccountState = {
  user: null,
  loading: false,
  error: null,
  token: null,
}
const acountReducer = (
  state: AccountState = initialState,
  action: AccountActionTypes,
): AccountState => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return { ...state, loading: true };
    }
    case LOGIN_SUCCESS: {
      return { ...state, loading: false, token: action.payload.token }
    }
    case LOGIN_FAIL: {
      return { ...state, loading: false, token: null, error: action.payload.error }
    }
    case LOGOUT: {
      return { ...state, loading: false, user: null, token: null, error: null }
    }
    default: {
      return state
    }
  }
}
export { acountReducer }
