'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App';
import IndexPage from './components/IndexPage';
import NotFoundPage from './components/NotFoundPage';
//<Route path="athlete/:id" component={IndexPage}/>

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={IndexPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;
