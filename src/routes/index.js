import LoginPage from "~p/Login"
import AppsPage from "~p/Apps"
import { URI_TO_APPS, URI_TO_LOGIN } from "~/constants"

let routes = [
  {
    name: "login",
    url: URI_TO_LOGIN,
    component: LoginPage,
    exact: true
  },
  {
    name: "apps",
    url: URI_TO_APPS,
    component: AppsPage,
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
