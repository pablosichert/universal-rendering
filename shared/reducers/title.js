"use strict";

import config         from '../../config';
import {TITLE_CHANGE} from '../actions';

function title(state = config.defaultTitle, action) {
  switch (action.type) {
    case TITLE_CHANGE:
      return action.title;
    default:
      return state;
  }
}

export default title;
