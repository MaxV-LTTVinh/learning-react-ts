import { Dispatch } from "react"
import { userService } from "../../services";
import { history } from '../../helpers';
import { AccountActionTypes, LOAD_CURRENT_LOGIN_USER_FAILURE, LOAD_CURRENT_LOGIN_USER_REQUEST, LOAD_CURRENT_LOGIN_USER_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "./types"

export const login = (email: string, password: string, from: string) => {
  return async (dispatch: Dispatch<AccountActionTypes>) => {
    dispatch({
      type: LOGIN_REQUEST,
      payload: {
        email: email,
        password: password,
      },
    });

    dispatch({
      type: LOGIN_SUCCESS,
      payload: { token: '' },
    });

    try {
      const response = await userService.login(email, password);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response,
      });
      history.push(from);
    } catch (error: any) {
      dispatch({
        type: LOGIN_FAIL,
        payload: { error: error.toString() },
      });
    }

  }
}

export const logout = (): AccountActionTypes => {
  return { type: LOGOUT };
};

export const getCurrentLoginUser = () => {
  return async (dispatch: Dispatch<AccountActionTypes>) => {
    dispatch({
      type: LOAD_CURRENT_LOGIN_USER_REQUEST,
    });
    try {
      const response = await userService.getCurrentLoginUser();
      dispatch({
        type: LOAD_CURRENT_LOGIN_USER_SUCCESS,
        payload: { user: response },
      });
    } catch (error: any) {
      dispatch({
        type: LOAD_CURRENT_LOGIN_USER_FAILURE,
        payload: { error: error.toString() },
      });
    }
  };
};
