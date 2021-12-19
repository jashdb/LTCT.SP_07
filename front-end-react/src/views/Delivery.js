import { Button, Table } from "reactstrap";
import { useParams, useHistory } from "react-router";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import UserName from "components/Texts/UserName";
import deliveryStatus from "variables/deliveryStatus";
import swal from "sweetalert";

export default function Delivery() {
  //if ((userInfo.role === 0 && userInfo.userId === delivery.customerId) || (userInfo.role === 1 && userInfo.userId === delivery.shipperId))
  let { deliveryId } = useParams();
  const [delivery, setDelivery] = useState(null);
  const history = useHistory();
  var userInfo = useSelector((state) => state.reducerLogin).userInfo;
  var mes = "Loading...";

  useEffect(() => {
    if (!delivery) {
      getDeliveryInfo();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const getDeliveryInfo = async () => {
    const data = {
      deliveryId: deliveryId,
    };

    const res = await axios.post("/api/getDeliveryInfo", data);
    if (res.data.status === 200) {
      setDelivery(res.data.delivery);
    } else if (res.data.status === 404) mes = "404 Not found...";
  };

  if (userInfo === undefined) {
    swal(
      "You are not logged in",
      "To access this page, you need to login first!",
      "warning"
    ).then(() => history.push("/admin/login"));
    return <div className="content">You need to login...</div>;
  }

	const updateStatus = async () => {
		const data = {
			deliveryId: deliveryId
		}
		const res = await axios.post('/api/updateStatus', data);
		if (res.data.status === 200) {
			swal(
				"Done !",
				res.data.message,
				"success"
			).then(() => history.push("/admin/my-deliveries"));
		}
	}

	const cancelDelivery = async () => {
		const data = {
			deliveryId: deliveryId
		}
		const res = await axios.post('/api/cancelDelivery', data);
		if (res.data.status === 200) {
			swal(
				"Done !",
				res.data.message,
				"success"
			).then(() => history.push("/admin/my-deliveries"));
		}
	}

  return (
    <div className="content">
      {delivery === null ? (
        mes
      ) : (
        <Table responsive>
          <thead className="text-primary text-danger">
            <th>
              <h5>Delivery Info</h5>
            </th>
            <th className="text-right">
							{userInfo.role === 1
								? (
									delivery.status < 3
										?
										<Button color="primary" onClick={updateStatus}>
											Update status to:{" "}
											<i className="text-danger">
												{deliveryStatus[delivery.status + 1].statusName}
											</i>
										</Button>
										:
										<Button color="primary" disabled>
											Cannot update status
										</Button>
								)
								:
								<Button color="primary" disabled={delivery.status >= 2} onClick={cancelDelivery}>
									Cancel delivery
								</Button>
							}
            </th>
            <th width="30px"></th>
          </thead>
          <tbody>
            <tr>
              <td width="20%" className="text-info">
                Customer Name
              </td>
              <td width="80%">
                <UserName userId={delivery.customerId} />
              </td>
            </tr>
            <tr>
              <td width="20%" className="text-info">
                Shipper Name
              </td>
              <td width="80%">
                <UserName userId={delivery.shipperId} />
              </td>
            </tr>
            <tr>
              <td width="20%" className="text-info">
                Order ID
              </td>
              <td width="80%">{delivery.orderId}</td>
            </tr>
            <tr>
              <td width="20%" className="text-info">
                Delivery Address
              </td>
              <td width="80%">{delivery.deliveryAddress}</td>
            </tr>
            <tr>
              <td width="20%" className="text-info">
                Cost
              </td>
              <td width="80%">{delivery.cost}Đ</td>
            </tr>
            <tr>
              <td width="20%" className="text-info">
                Shipping Fee
              </td>
              <td width="80%">{delivery.shippingFee}Đ</td>
            </tr>
            <tr>
              <td width="20%" className="text-info">
                Created at
              </td>
              <td width="80%">{delivery.created_at}</td>
            </tr>
            <tr>
              <td width="20%" className="text-info">
                Status
              </td>
              <td width="80%" className={deliveryStatus[delivery.status].color}>
                {deliveryStatus[delivery.status].statusName}
              </td>
            </tr>
          </tbody>
        </Table>
      )}
    </div>
  );
}
