import LoginPage from "~p/login";
import Apps from "~p/apps";

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
    component: Apps,
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
