import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/sb-admin-2.min.css';
import './assets/font-awesome/css/all.min.css';
import { Router, Switch } from 'react-router-dom';
import Login from './pages/account/Login';
import { Admin } from './pages/admin/Admin';
import { PrivateRoute, AccountRoute } from './components';
import { history } from './helpers';

function App() {
  let a = true;
  return (
    <div className="App" id="wrapper">
      <Router history={history}>
        <Switch>
          <AccountRoute path='/login'>
            <Login />
          </AccountRoute>
          <PrivateRoute path='/'>
            <Admin />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
