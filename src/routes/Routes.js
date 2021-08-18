import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from '../pages/home/Home';
import NoMatch from '../pages/NoMatch';

const Routes = () => {
    return (
        <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="*">
                <NoMatch />
              </Route>
            </Switch>
        </Router>
    )
}

export default Routes
