"use strict";

import {URL_CHANGE} from '../actions';

function url(state = '/', action) {
  switch (action.type) {
    case URL_CHANGE:
      return action.url;
    default:
      return state;
  }
}

export default url;
