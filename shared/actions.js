"use strict";

var actionsSet = new Set([
  'URL_CHANGE',
  'TITLE_CHANGE'
]);

var actionsObj = {};

for (let action of actionsSet) {
  actionsObj[action] = action;
}

const actions = actionsObj;

export default actions;
