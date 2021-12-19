import React from "react";
import { useSelector } from "react-redux";
// reactstrap components
import { Card, CardHeader, CardBody, Table, CardTitle, Col } from "reactstrap";

import GoToDeliveryButton from "components/Buttons/GotoDeliveryButton";
import { useHistory } from "react-router";
import swal from "sweetalert";

function Dashboard() {
  const history = useHistory();
  var userInfo = useSelector((state) => state.reducerLogin).userInfo;

  if (userInfo === undefined) {
    swal(
      "You are not logged in",
      "To access this page, you need to login first!",
      "warning"
    ).then(() => history.push("/admin/login"));
    return <div className="content">You need to login...</div>;
  } else if (userInfo.role === 1)
    return (
      <>
        <div className="content">
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Deliveries</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th></th>
                      <th>Customer name</th>
                      <th colSpan={2}>Delivery address</th>
                      <th className="text-right" width="150px">
                        Cost
                      </th>
                      <td className="text-right" width="150px">
                        Shipping Fee
                      </td>
                      <td className="text-right" width="150px">
                        Total
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td width="100px">
                        <GoToDeliveryButton />
                      </td>
                      <td>Nguyen Van A</td>
                      <td>Hà Nội</td>
                      <td>Hai Bà Trưng</td>
                      <td className="text-right" width="150px">
                        $36,738
                      </td>
                      <td className="text-right" width="150px">
                        $36,738
                      </td>
                      <td className="text-right" width="150px">
                        $23,789
                      </td>
                    </tr>
                    <tr>
                      <td width="100px">
                        <GoToDeliveryButton />
                      </td>
                      <td>Tran Van B</td>
                      <td>Hà Nội</td>
                      <td>Mỹ Đức</td>
                      <td className="text-right" width="150px">
                        $23,789
                      </td>
                      <td className="text-right" width="150px">
                        $36,738
                      </td>
                      <td className="text-right" width="150px">
                        $23,789
                      </td>
                    </tr>
                    <tr>
                      <td width="100px">
                        <GoToDeliveryButton />
                      </td>
                      <td>Dao Thi C</td>
                      <td>Hải Phòng</td>
                      <td>Hồng Bàng</td>
                      <td className="text-right" width="150px">
                        $56,142
                      </td>
                      <td className="text-right" width="150px">
                        $36,738
                      </td>
                      <td className="text-right" width="150px">
                        $23,789
                      </td>
                    </tr>
                    <tr>
                      <td width="100px">
                        <GoToDeliveryButton />
                      </td>
                      <td>Nguyen Duc D</td>
                      <td>Đà Nẵng</td>
                      <td>Cẩm Lệ</td>
                      <td className="text-right" width="150px">
                        $38,735
                      </td>
                      <td className="text-right" width="150px">
                        $36,738
                      </td>
                      <td className="text-right" width="150px">
                        $23,789
                      </td>
                    </tr>
                    <tr>
                      <td width="100px">
                        <GoToDeliveryButton />
                      </td>
                      <td>Nguyen Van E</td>
                      <td>Hà Nội</td>
                      <td>Đông Anh</td>
                      <td className="text-right" width="150px">
                        $63,542
                      </td>
                      <td className="text-right" width="150px">
                        $36,738
                      </td>
                      <td className="text-right" width="150px">
                        $23,789
                      </td>
                    </tr>
                    <tr>
                      <td width="100px">
                        <GoToDeliveryButton />
                      </td>
                      <td>Tran Van F</td>
                      <td>Hải Phòng</td>
                      <td>Ngô Quyền</td>
                      <td className="text-right" width="150px">
                        $78,615
                      </td>
                      <td className="text-right" width="150px">
                        $36,738
                      </td>
                      <td className="text-right" width="150px">
                        $23,789
                      </td>
                    </tr>
                    <tr>
                      <td width="100px">
                        <GoToDeliveryButton />
                      </td>
                      <td>Hoang Thi G</td>
                      <td>Hà Nội</td>
                      <td>Mê Linh</td>
                      <td className="text-right" width="150px">
                        $98,615
                      </td>
                      <td className="text-right" width="150px">
                        $36,738
                      </td>
                      <td className="text-right" width="150px">
                        $23,789
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </div>
      </>
    );
  else
    return (
      <div className="content">
        <Col md="12">
          <Card>
            <CardHeader>
              <CardTitle tag="h4">Deliveries</CardTitle>
            </CardHeader>
            <CardBody>
              <Table responsive>
                <thead className="text-primary">
                  <tr>
                    <th></th>
                    <th>Shipper name</th>
                    <th colSpan={2}>Delivery address</th>
                    <th className="text-right" width="150px">
                      Cost
                    </th>
                    <td className="text-right" width="150px">
                      Shipping Fee
                    </td>
                    <td className="text-right" width="150px">
                      Total
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td width="100px">
                      <GoToDeliveryButton />
                    </td>
                    <td>Nguyen Van A</td>
                    <td>Hà Nội</td>
                    <td>Hai Bà Trưng</td>
                    <td className="text-right" width="150px">
                      $36,738
                    </td>
                    <td className="text-right" width="150px">
                      $36,738
                    </td>
                    <td className="text-right" width="150px">
                      $23,789
                    </td>
                  </tr>
                  <tr>
                    <td width="100px">
                      <GoToDeliveryButton />
                    </td>
                    <td>Tran Van B</td>
                    <td>Hà Nội</td>
                    <td>Mỹ Đức</td>
                    <td className="text-right" width="150px">
                      $23,789
                    </td>
                    <td className="text-right" width="150px">
                      $36,738
                    </td>
                    <td className="text-right" width="150px">
                      $23,789
                    </td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </div>
    );
}

export default Dashboard;
