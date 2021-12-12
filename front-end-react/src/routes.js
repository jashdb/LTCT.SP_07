import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import UserPage from "views/User.js";
import LoginPage from "views/LoginPage";
import CreateDelivery from "views/CreateDelivery";

var routes = [
  {
    path: "/my-deliveries",
    name: "My Deliveries",
    icon: "nc-icon nc-delivery-fast",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/create-delivery",
    name: "Create Delivery",
    icon: "nc-icon nc-cloud-upload-94",
    component: CreateDelivery,
    layout: "/admin",
  },
  {
    path: "/profile",
    name: "Profile",
    icon: "nc-icon nc-single-02",
    component: UserPage,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "nc-icon nc-circle-10",
    component: LoginPage,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-diamond",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "nc-icon nc-caps-small",
    component: Typography,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin",
  },
];
export default routes;
