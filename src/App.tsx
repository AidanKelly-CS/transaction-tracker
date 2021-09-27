import React from 'react';
import logo from './logo.svg';
import './App.css';
import CreateTransaction from './transactions/create-transaction/CreateTransaction';
import ViewTransactions from './transactions/view-transactions/ViewTransactions';
import 'normalize.css';

import Navbar from './navbar/Navbar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from './transactions/dashboard/Dashboard';

function App() {

  return (
    <>

    <style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Noto+Sans&display=swap');
    </style>

    <Router>
      <Navbar />

      <main>
      <Switch>

        <Route path="/view-transactions">
          <ViewTransactions/>
        </Route>

        <Route path="/dashboard">
          <Dashboard/>
        </Route>

        <Route path="/">
          <CreateTransaction/>
        </Route>

      </Switch>
      </main>

    </Router> 
    </>
  );
}

export default App;
