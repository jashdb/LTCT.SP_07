import { useSelector } from "react-redux";
import swal from "sweetalert";
import { useHistory } from "react-router";
import CustomerDelivery from "components/Tables/CustomerDelivery";
import ShipperDelivery from "components/Tables/ShipperDelivery";

export default function Dashboard() {
  const history = useHistory();
  var userInfo = useSelector((state) => state.reducerLogin).userInfo;

  if (userInfo === undefined) {
    swal(
      "You are not logged in",
      "To access this page, you need to login first!",
      "warning"
    ).then(() => history.push("/admin/login"));
    return <div className="content">You need to login...</div>;
  } else if (userInfo.role === 0) {
    return (
      <CustomerDelivery customerId={userInfo.userId} />
    );
  } else if (userInfo.role === 1)
    return (
      <ShipperDelivery shipperId={userInfo.userId} />
    );
}
