"use strict";

var actionsSet = new Set([
  'ROUTE_CHANGE'
]);

var actionsObj = {};

for (let action of actionsSet) {
  actionsObj[action] = action;
}

const actions = actionsObj;

export default actions;
