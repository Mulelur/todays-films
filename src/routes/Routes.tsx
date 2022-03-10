// eslint-disable-next-line unicorn/filename-case
import * as React from 'react';
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import Browse from '../views/Browse/Browse';
import Details from '../views/Details';
import Home from '../views/Home';
import NotFound from '../views/NotFound';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" component={Home} />
        <Route path="/browse" exact component={Browse} />
        <Route path="/details/:id" exact component={Details} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}
