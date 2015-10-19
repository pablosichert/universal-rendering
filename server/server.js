"use strict";

import config   from '../config.js';
import express  from 'express';
import http     from 'http';
import nunjucks from 'nunjucks';
import riot     from 'riot';
import tags     from '../shared/components/';
import routes   from '../shared/routes';

export default function() {
  var app = express();

  nunjucks.configure('server/views', {
    autoescape: false,
    express: app
  });

  app.set('view engine', 'tmpl');
  app.use(express.static('public'));

  app.get('*', function(req, res) {
    var store = {
      route: '/',
      title: routes[req.url].title,
      pathname: req.url,
      routes: routes
    };

    var html = riot.render(tags.app, {store: store, isClient: false});

    res.render('base', {
      html: html,
      opts: {store: store, isClient: true}
    });
  });

  http.createServer(app).listen(config.ports.http);
  console.log('http server started on port ' + config.ports.http);
};
