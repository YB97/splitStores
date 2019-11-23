import LoginPage from "../pages/Login";
import RegPage from "../pages/Reg";
import Welcome from "../pages/Welcome";
import Apps from "../pages/Apps";
import App from "../pages/App";
import NewApp from "../pages/NewApp";
import NewAppStep2 from "../pages/NewApp/step2";
import Experiments from "../pages/Experiments";
import Experiment from "../pages/Experiment";
import NewExperiment from "../pages/NewExperiment";
import NewExperimentStep2 from "../pages/NewExperiment/step2";
import NewExperimentStep3 from "../pages/NewExperiment/step3";
import NotFound from "../pages/NotFound";
import Variation from "../pages/Variation";
import {
  URI_TO_APPS,
  URI_TO_LOGIN,
  URI_TO_REG,
  URI_TO_WELCOME,
  URI_TO_NEW_APPS,
  URI_TO_NEW_APPS_STEP_2,
  URI_TO_EXPERIMENTS,
  URI_TO_EXPERIMENT,
  URI_TO_NEW_EXPERIMENT,
  URI_TO_NEW_EXPERIMENT_STEP_2,
  URI_TO_NEW_EXPERIMENT_STEP_3,
  URI_TO_APP,
  URI_TO_VARIATION
} from "../constants";

let routes = [
  {
    name: "login",
    url: URI_TO_LOGIN,
    component: LoginPage,
    exact: true,
    isAuthRequired: false
  },
  {
    name: "reg",
    url: URI_TO_REG,
    component: RegPage,
    exact: true,
    isAuthRequired: false
  },
  {
    name: "welcome",
    url: URI_TO_WELCOME,
    component: Welcome,
    exact: true,
    isAuthRequired: true
  },
  {
    name: "apps",
    url: URI_TO_APPS,
    component: Apps,
    exact: true,
    isAuthRequired: true
  },
  {
    name: "app",
    url: URI_TO_APP,
    component: App,
    exact: true,
    isAuthRequired: true
  },
  {
    name: "newApp",
    url: URI_TO_NEW_APPS,
    component: NewApp,
    exact: true,
    isAuthRequired: true
  },
  {
    name: "newAppStep2",
    url: URI_TO_NEW_APPS_STEP_2,
    component: NewAppStep2,
    exact: true,
    isAuthRequired: true
  },
  {
    name: "experiments",
    url: URI_TO_EXPERIMENTS,
    component: Experiments,
    exact: true,
    isAuthRequired: true
  },
  {
    name: "experiment",
    url: URI_TO_EXPERIMENT,
    component: Experiment,
    exact: true,
    isAuthRequired: true
  },
  {
    name: "newExperiment",
    url: URI_TO_NEW_EXPERIMENT,
    component: NewExperiment,
    exact: true,
    isAuthRequired: true
  },
  {
    name: "newExperimentStep2",
    url: URI_TO_NEW_EXPERIMENT_STEP_2,
    component: NewExperimentStep2,
    exact: true,
    isAuthRequired: true
  },
  {
    name: "newExperimentStep3",
    url: URI_TO_NEW_EXPERIMENT_STEP_3,
    component: NewExperimentStep3,
    exact: true,
    isAuthRequired: true
  },
  {
    name: "variation",
    url: URI_TO_VARIATION,
    component: Variation,
    exact: true,
    isAuthRequired: true
  },
  {
    name: "login",
    url: "/",
    component: LoginPage,
    exact: true,
    isAuthRequired: false
  },
  {
    name: "default",
    url: "**",
    component: NotFound,
    exact: true
  }
];

let routesMap = {};

routes.forEach(route => {
  if (route.hasOwnProperty("name")) {
    routesMap[route.name] = route.url;
  }
});

let urlBuilder = function(name, params) {
  if (!routesMap.hasOwnProperty(name)) {
    return null;
  }

  let url = routesMap[name]; // news/:id
  console.log("url", url);

  for (let key in params) {
    url = url.replace(":" + key, params[key]);
  }
  console.log("url", url);

  return url;
};

export default routes;
export { routesMap, urlBuilder };
