import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import routes from "./routes";
import "./global.scss";
import stores from "./stores";

class App extends Component {
  render() {
    let routesComponents = routes.map(route => {
      return (
        <Route
          path={route.url}
          component={route.component}
          exact={route.exact}
          key={route.url}
        />
      );
    });
    return (
      <Router>
        <Switch>{routesComponents}</Switch>
      </Router>
    );
  }
}

ReactDOM.render(
  <Provider stores={stores}>
    <App />
  </Provider>,
  document.getElementById("app")
);
