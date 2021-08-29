import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from '../pages/home/Home';
import Profile from '../pages/profile/Profile';
import NoMatch from '../pages/NoMatch';
import ProductDetails from '../pages/product-details/ProductDetails';

const Routes = () => {
    return (
        <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/profile">
                <Profile />
              </Route>
              <Route path="/:productName">
                <ProductDetails />
              </Route>
              <Route path="*">
                <NoMatch />
              </Route>
              
            </Switch>
        </Router>
    )
}

export default Routes
