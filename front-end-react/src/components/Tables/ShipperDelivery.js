import { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardHeader, CardBody, Table, CardTitle, Col } from "reactstrap";
import UserName from "components/Texts/UserName";
import GoToDeliveryButton from "components/Buttons/GotoDeliveryButton";
import deliveryStatus from "variables/deliveryStatus";

export default function ShipperDelivery(props) {
  const [deliveryList, setDeliveryList] = useState(null);
  var mes = "Loading...";

  useEffect(() => {
    if (!deliveryList) {
      getDeliveryList();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const getDeliveryList = async () => {
    const data = {
      shipperId: props.shipperId,
    };

    const res = await axios.post("/api/getDeliveryByShipper", data);
    if (res.data.status === 200) {
      setDeliveryList(res.data.deliveries);
    } else if (res.data.status === 404) mes = "No delivery!";
  };

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
                  <td className="text-right" width="150px">
                    Status
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
                            <GoToDeliveryButton deliveryId={row.deliveryId} />
                          </td>
                          <td>
                            <UserName userId={row.customerId} />
                          </td>
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
                          <td
                            className={
                              "text-right " + deliveryStatus[row.status].color
                            }
                            width="150px"
                          >
                            {deliveryStatus[row.status].statusName}
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
