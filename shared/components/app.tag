<app>
  <p>Current Path: {state.url}</p>
  <nav>
    <ul>
      <li each={route, value in opts.routes}><a href="{value.path}">{value.title}</a></li>
    </ul>
  </nav>
  <div>
    <h1>{state.title}</h1>
    <div if={state.url == opts.routes.home.path}>
      Content for "Home"
    </div>
    <div if={state.url == opts.routes.page1.path}>
      Content for "Page 1"
    </div>
    <div if={state.url == opts.routes.page2.path}>
      Content for "Page 2"
    </div>
  </div>

  <script type="es6">
    import $                          from 'jquery';
    import {URL_CHANGE, TITLE_CHANGE} from '../actions';

    var component = this;
    component.state = opts.store.getState();
    component.update();

    if(opts.isClient) {
      history.replaceState(component.state, component.state.title, component.state.url);
    
      $(document).on('click', 'a', handlerLink);
      window.onpopstate = handlerPopState;
    }

    var unsubscribe = opts.store.subscribe(() => {
      component.state = opts.store.getState();

      document.title = component.state.title;
      component.update();
    });
    
    function handlerLink(event) {
      event.preventDefault();

      opts.store.dispatch({
        type: URL_CHANGE,
        url: this.pathname
      });

      opts.store.dispatch({
        type: TITLE_CHANGE,
        title: this.text
      });

      history.pushState(component.state, component.state.title, component.state.url);
    }
    
    function handlerPopState(event) {
      document.title = event.state.title;

      component.state = event.state;
      component.update();
    }
  </script>
</app>
