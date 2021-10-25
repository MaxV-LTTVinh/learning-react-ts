import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/sb-admin-2.min.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import Login from './pages/account/Login';
import Admin from './pages/admin/Admin';
import { PrivateRoute, AccountRoute } from './components';
function App() {
  let a = true;
  return (
    <div className="App" id="wrapper">
      <BrowserRouter>
        <Switch>
          <AccountRoute>
            <Login/>
          </AccountRoute>
          <PrivateRoute>
            <Admin />
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
