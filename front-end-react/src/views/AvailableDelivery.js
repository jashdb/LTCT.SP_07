import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import swal from "sweetalert";
import { useHistory } from "react-router";
import {
  Card,
  CardHeader,
  CardBody,
  Table,
  CardTitle,
  Col,
} from "reactstrap";
import UserName from "components/Texts/UserName";
import TakeDeliveryButton from "components/Buttons/TakeDeliveryButton";

export default function AvailableDelivery() {
  const history = useHistory();
  const [deliveryList, setDeliveryList] = useState(null);
  var mes = "Loading...";

  useEffect(() => {
    if (!deliveryList) {
      getDeliveryList();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const getDeliveryList = async () => {
    const data = {};

    const res = await axios.post("/api/getAvailableDelivery", data);
    console.log(res);
    if (res.data.status === 200) {
      setDeliveryList(res.data.deliveries);
    } else if (res.data.status === 404) mes = "No delivery available!";
  };

  var userInfo = useSelector((state) => state.reducerLogin).userInfo;

  if (userInfo === undefined) {
    swal(
      "You are not logged in",
      "To access this page, you need to login first!",
      "warning"
    ).then(() => history.push("/admin/login"));
    return <div className="content">You need to login...</div>;
  } else if (userInfo.role === 0) {
    swal(
      "You dont't have permission to access this page",
      "Only shipper can access this page!",
      "warning"
    ).then(() => history.push("/admin/login"));
    return <div className="content">Only shipper can access this page</div>;
  } else if (userInfo.role === 1)
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
                    <th>Customer name</th>
                    <th>Delivery address</th>
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
                  {deliveryList === null
                    ? mes
                    : deliveryList.map((row) => {
                        return (
                          <tr>
                            <td width="100px">
                              <TakeDeliveryButton deliveryId={row.deliveryId}/>
                            </td>
                            <td><UserName userId={row.customerId}/></td>
                            <td>{row.deliveryAddress}</td>
                            <td className="text-right" width="150px">
                              {row.cost}Đ
                            </td>
                            <td className="text-right" width="150px">
                              {row.shippingFee}Đ
                            </td>
                            <td className="text-right" width="150px">
                              {row.cost + row.shippingFee}Đ
                            </td>
                          </tr>
                        );
                      })}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </div>
    );
}
