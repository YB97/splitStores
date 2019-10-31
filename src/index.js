import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import routes from "./routes";
import "./styles.scss";
import stores from '~s';

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
    return <Router>{routesComponents}</Router>;
  }
}

ReactDOM.render(
  <Provider stores={stores}>
    <App />
  </Provider>,
  document.getElementById("app")
);
