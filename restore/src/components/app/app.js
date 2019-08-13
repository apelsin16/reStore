import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/home-page';
import CardPage from '../pages/card-page';     
import ShopHeader from '../shop-header';
import './app.css';

const App = () => {
  return (
    <main role="main" className="container">
      <ShopHeader numItems={5} total={120} />
    <Switch>
      <Route
        path="/"
        component={HomePage}
        exact
      />

      <Route
        path="/cart"
        component={CardPage}
      />
    </Switch>
    </main>
    );
};

export default App;