import { AccountState, AccountActionTypes, LOGIN_REQUEST, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, LOAD_CURRENT_LOGIN_USER_REQUEST, LOAD_CURRENT_LOGIN_USER_SUCCESS, LOAD_CURRENT_LOGIN_USER_FAILURE } from './types';
const initialState: AccountState = {
  user: null,
  loading: false,
  error: null,
  token: null,
}
const accountReducer = (
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
    case LOAD_CURRENT_LOGIN_USER_REQUEST: {
      return { ...state, loading: true };
    }
    case LOAD_CURRENT_LOGIN_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        user: action.payload.user,
      };
    }
    case LOAD_CURRENT_LOGIN_USER_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }
    default: {
      return state
    }
  }
}
export { accountReducer }
