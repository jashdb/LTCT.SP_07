/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { useSelector } from "react-redux";

// reactstrap components
import {
  Card,
  CardBody,
  CardFooter,
  Row,
  Col,
} from "reactstrap";

function User() {
  var userInfo = (useSelector((state) => state.reducerLogin)).userInfo;
  console.log(userInfo);
  if (userInfo === undefined) userInfo = {
    avatar: "https://www.hoteljob.vn/cong-dong/frontend/images/default_avatar.png",
    fullname: "Example name",
    email: "abc@gmail.com",
    role: 2,
  }
  return (
    <>
      <div className="content">
        <Row>
          <Col md="4">
            <Card className="card-user">
              <div className="image">
                <img
                  alt="..."
                  src={require("assets/img/damir-bosnjak.jpg").default}
                />
              </div>
              <CardBody>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={userInfo.avatar}
                    />
                    <h5 className="title">{userInfo.fullname}</h5>
                  </a>
                  <p className="description">{userInfo.email}</p>
                  <p className="description">{userInfo.role === 1 ? "Shipper" : (userInfo.role === 0 ? "Customer" : "Other role")}</p>
                </div>
              </CardBody>
              <CardFooter>
                <hr />
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default User;
