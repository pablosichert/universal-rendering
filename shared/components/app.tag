<app>
  <p>Current Path: {opts.store.path}</p>
  <nav>
    <ul>
      <li each={route, value in routes}><a href="{route}">{value.title}</a></li>
    </ul>
  </nav>
  <div>
    <h1>{opts.store.title}</h1>
  </div>

  <script>
    var component = this;

    component.routes = opts.store.routes;

    if(opts.isClient) {
      history.replaceState(opts.store, opts.store.title, location.pathname);
    
      $(document).on('click', 'a', handlerLink);
      window.onpopstate = handlerPopState;
    }
    
    function handlerLink(event) {
      event.preventDefault();

      opts.store.pathname = this.pathname;
      opts.store.title = this.text;
      document.title = this.text;

      component.update();

      history.pushState(opts.store, opts.store.title, this.pathname);
    }
    
    function handlerPopState(event) {
      opts.store.pathname = event.state.pathname;
      opts.store.title = event.state.title;
      document.title = event.state.title;

      component.update();
    }
  </script>
</app>
