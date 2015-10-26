"use strict";

import routes         from '../routes';
import {ROUTE_CHANGE} from '../actions';

function activeRoute(state = routes.home, action) {
  switch (action.type) {
    case ROUTE_CHANGE:
      return action.activeRoute;
    default:
      return state;
  }
}

export default activeRoute;
