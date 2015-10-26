<app>
  <p>Current route: {JSON.stringify(opts.state.activeRoute)}</p>
  <nav>
    <ul>
      <li each={routeKey, routeValue in opts.routes}><a href="{routeValue.path}">{routeValue.title}</a></li>
    </ul>
  </nav>
  <div>
    <h1>{opts.state.activeRoute.title}</h1>
    <div if={opts.state.activeRoute === opts.routes.home}>
      Content for "Home"
    </div>
    <div if={opts.state.activeRoute === opts.routes.page1}>
      Content for "Page 1"
    </div>
    <div if={opts.state.activeRoute === opts.routes.page2}>
      Content for "Page 2"
    </div>
  </div>

  <script type="es6">
    import page           from 'page';
    import {ROUTE_CHANGE} from '../actions';

    var component = this;
    
    if(opts.isClient) {
      var unsubscribe = opts.store.subscribe(() => {
        opts.state = opts.store.getState();

        document.title = opts.state.activeRoute.title;
        component.update();
      });
    
      for (let route in opts.routes) {
        page(opts.routes[route].path, function() {
          opts.store.dispatch({
            type:         ROUTE_CHANGE,
            activeRoute:  opts.routes[route]
          });
        });
      }

      page();
    }
  </script>
</app>
