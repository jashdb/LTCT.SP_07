import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import UserPage from "views/User.js";
import LoginPage from "views/LoginPage";
import CreateDelivery from "views/CreateDelivery";
import AvailableDelivery from "views/AvailableDelivery";

var routes = [
  {
    path: "/my-deliveries",
    name: "My Deliveries",
    icon: "nc-icon nc-delivery-fast",
    component: Dashboard,
    layout: "/admin",
    logout: false,
    customer: true,
    shipper: true,
  },
  {
    path: "/available-delivery",
    name: "Available delivery",
    icon: "nc-icon nc-tag-content",
    component: AvailableDelivery,
    layout: "/admin",
    logout: false,
    customer: false,
    shipper: true,
  },
  {
    path: "/create-delivery",
    name: "Create Delivery",
    icon: "nc-icon nc-cloud-upload-94",
    component: CreateDelivery,
    layout: "/admin",
    logout: true,
    customer: true,
    shipper: true,
  },
  {
    path: "/profile",
    name: "Profile",
    icon: "nc-icon nc-single-02",
    component: UserPage,
    layout: "/admin",
    logout: false,
    customer: true,
    shipper: true,
  },
  {
    path: "/login",
    name: "Login",
    icon: "nc-icon nc-circle-10",
    component: LoginPage,
    layout: "/admin",
    logout: true,
    customer: false,
    shipper: false,
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-diamond",
    component: Icons,
    layout: "/admin",
    logout: false,
    customer: false,
    shipper: false,
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "nc-icon nc-caps-small",
    component: Typography,
    layout: "/admin",
    logout: false,
    customer: false,
    shipper: false,
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin",
    logout: false,
    customer: false,
    shipper: false,
  },
];
export default routes;
