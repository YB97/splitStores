import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider, inject, observer } from "mobx-react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ErrorBoundry from "./hocs/ErrorBoundry";
import SpeedDial from "./components/SpeedDial";

import routes from "./routes";
import "./global.scss";
import stores from "./stores";

@inject("stores")
@observer
class App extends Component {
  render() {
    const { isAuth } = this.props.stores.login;
    console.log(isAuth);
    const authFreeRoutes = routes.filter(route => !route.isAuthRequired);
    const routesComponents = isAuth
      ? routes.map(getRoutes)
      : authFreeRoutes.map(getRoutes);
    return (
      <Router>
        <Switch>{routesComponents}</Switch>
        <SpeedDial />
      </Router>
    );
  }
}

ReactDOM.render(
  <Provider stores={stores}>
    <ErrorBoundry>
      <App />
    </ErrorBoundry>
  </Provider>,
  document.getElementById("app")
);

function getRoutes(route) {
  return (
    <Route
      path={route.url}
      component={route.component}
      exact={route.exact}
      key={route.url}
    />
  );
}
