import React from 'react';
import { Router, Route, IndexRoute } from 'dva/router';

import Home from "./routes/Home.js";

import Mine from "./routes/Mine.js";

import Support from "./routes/Support.js";

import Container from "./routes/Container.js";

import TabContainer from "./routes/TabContainer.js";

import Login from "./routes/Login.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={TabContainer}>
        <IndexRoute component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/mine" component={Mine} />
        <Route path="/support" component={Support} />
      </Route>
      <Route path="/login" component={Login} />
    </Router>
  );
}

export default RouterConfig;
