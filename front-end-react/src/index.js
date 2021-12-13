import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "redux/reducers/index";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.3.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import AdminLayout from "layouts/Admin.js";

import axios from 'axios';
axios.defaults.baseURL = "http://localhost:8000/";

const store = createStore(allReducers);
export default store;

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Switch>
        <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
        <Redirect to="/admin/my-deliveries" />
      </Switch>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
