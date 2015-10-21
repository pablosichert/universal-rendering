"use strict";

import {createStore}  from 'redux';
import app            from '../shared/components/app.tag';
import reducers       from '../shared/reducers';
import riot           from 'riot';
import routes         from '../shared/routes';

const store = createStore(reducers, window.state);

riot.mount(app, {
  isClient: true,
  routes: routes,
  store: store
});
