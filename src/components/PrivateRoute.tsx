import React from 'react'
import { useSelector } from 'react-redux';
import { Route, RouteProps } from 'react-router-dom'
import Login from '../pages/account/Login'
import { AppState } from '../store';
import { AccountState } from '../store/account/types';

export const PrivateRoute = ({
  children,
  ...rest
}: RouteProps): JSX.Element => {
  const account: AccountState = useSelector((state: AppState) => state.account);
  return (
    <Route {...rest} >
      { (account.token ? children : <Login /> )}
    </Route>
  )
}
