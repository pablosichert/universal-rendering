"use strict";

import {createStore}  from 'redux';
import config         from '../config';
import express        from 'express';
import http           from 'http';
import nunjucks       from 'nunjucks';
import riot           from 'riot';
import reducers       from '../shared/reducers';
import routes         from '../shared/routes';
import tags           from '../shared/components';

export default function() {
  var app = express();

  nunjucks.configure('server/views', {
    autoescape: false,
    express: app
  });

  app.set('view engine', 'tmpl');
  app.use(express.static('public'));

  app.use((req, res, next) => {
    // Default state
    req.state = {
      title: config.defaultTitle,
      url: req.url
    };

    next();
  });

  app.get(routes.home.path, (req, res, next) => {
    req.state.title = routes.home.title;

    next();
  });

  app.get(routes.page1.path, (req, res, next) => {
    req.state.title = routes.page1.title;

    next();
  });

  app.get(routes.page2.path, (req, res, next) => {
    req.state.title = routes.page2.title;

    next();
  });

  app.use((req, res) => {
    var store = createStore(reducers, req.state);
    var html = riot.render(tags.app, {isClient: false, routes: routes, store: store});

    res.render('base', {
      html: html,
      state: req.state
    });
  });

  http.createServer(app).listen(config.ports.http);
  console.log('http server started on port ' + config.ports.http);
}
