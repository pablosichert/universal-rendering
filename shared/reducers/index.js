"use strict";

import {combineReducers} from 'redux';

export default combineReducers({
  title:  require('./title'),
  url:    require('./url')
});
