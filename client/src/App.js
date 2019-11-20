import React, { PureComponent } from "react";
import { Route, Switch } from "react-router-dom";

import { Home, Create, Edit, About } from "containers";

class App extends PureComponent {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/create' exact component={Create} />
        <Route path='/edit/:id' exact component={Edit} />
        <Route path='/about' exact component={About} />
      </Switch>
    );
  }
}

export default App;
