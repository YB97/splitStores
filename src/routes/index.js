import LoginPage from "../pages/Login"
import Welcome from "../pages/Welcome"
import { URI_TO_APPS, URI_TO_LOGIN, URI_TO_WELCOME } from "../constants"

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
