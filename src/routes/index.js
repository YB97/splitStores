import LoginPage from "~p/Login"
import AppsPage from "~p/Apps"

let routes = [
  {
    name: "login",
    url: "/login",
    component: LoginPage,
    exact: true
  },
  {
    name: "apps",
    url: "/apps",
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
