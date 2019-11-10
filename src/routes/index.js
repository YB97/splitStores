import LoginPage from "../pages/Login"
import Welcome from "../pages/Welcome"
import Apps from "../pages/Apps"
import NewApp from "../pages/NewApp"
import {
  URI_TO_APPS,
  URI_TO_LOGIN,
  URI_TO_WELCOME,
  URI_TO_NEW_APPS
} from "../constants"

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
    url: URI_TO_APPS,
    component: Apps,
    exact: true
  },
  {
    name: "newApp",
    url: URI_TO_NEW_APPS,
    component: NewApp,
    exact: true
  }
]

let routesMap = {}

routes.forEach(route => {
  if (route.hasOwnProperty("name")) {
    routesMap[route.name] = route.url
  }
})

export default routes
export { routesMap }
