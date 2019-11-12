import LoginPage from "../pages/Login";
import Welcome from "../pages/Welcome";
import Apps from "../pages/Apps";
import App from "../pages/App";
import NewApp from "../pages/NewApp";
import NewAppStep2 from "../pages/NewApp/step2";
import Experiments from "../pages/Experiments";
import NewExperiment from "../pages/NewExperiment";
import NewExperimentStep2 from "../pages/NewExperiment/step2";
import NewExperimentStep3 from "../pages/NewExperiment/step3";
import {
  URI_TO_APPS,
  URI_TO_LOGIN,
  URI_TO_WELCOME,
  URI_TO_NEW_APPS,
  URI_TO_NEW_APPS_STEP_2,
  URI_TO_EXPERIMENTS,
  URI_TO_NEW_EXPERIMENT,
  URI_TO_NEW_EXPERIMENT_STEP_2,
  URI_TO_NEW_EXPERIMENT_STEP_3
} from "../constants";

let routes = [
  {
    name: "login",
    url: URI_TO_LOGIN,
    component: LoginPage,
    exact: true
  },
  {
    name: "welcome",
    url: URI_TO_WELCOME,
    component: Welcome,
    exact: true
  },
  {
    name: "apps",
    url: "/app",
    component: App,
    exact: true
  },
  {
    name: "app",
    url: URI_TO_APPS,
    component: Apps,
    exact: true
  },
  {
    name: "newApp",
    url: URI_TO_NEW_APPS,
    component: NewApp,
    exact: true
  },
  {
    name: "newAppStep2",
    url: URI_TO_NEW_APPS_STEP_2,
    component: NewAppStep2,
    exact: true
  },
  {
    name: "experiments",
    url: URI_TO_EXPERIMENTS,
    component: Experiments,
    exact: true
  },
  {
    name: "newExperiment",
    url: URI_TO_NEW_EXPERIMENT,
    component: NewExperiment,
    exact: true
  },
  {
    name: "newExperimentStep2",
    url: URI_TO_NEW_EXPERIMENT_STEP_2,
    component: NewExperimentStep2,
    exact: true
  },
  {
    name: "newExperimentStep3",
    url: URI_TO_NEW_EXPERIMENT_STEP_3,
    component: NewExperimentStep3,
    exact: true
  }
];

let routesMap = {};

routes.forEach(route => {
  if (route.hasOwnProperty("name")) {
    routesMap[route.name] = route.url;
  }
});

export default routes;
export { routesMap };
