import { Button } from "reactstrap"
import {useHistory} from 'react-router-dom';
import axios from "axios";
import { useSelector } from "react-redux";
import swal from "sweetalert";

export default function TakeDeliveryButton(props) {
    const history = useHistory();
    var userInfo = useSelector((state) => state.reducerLogin).userInfo;
    const takeDelivery = async () => {
        const data = {
            deliveryId: props.deliveryId,
            shipperId: userInfo.userId,
        }
        const res = await axios.post('api/takeDelivery', data);
        if (res.data.status === 200) {
            swal("Success !", res.data.message, "success")
                .then(() => history.push("/admin/my-deliveries"));
        } else {
            swal("Some error occured !", res.data.message, "error");
        }
    }
    return (
        <Button color="info" onClick={takeDelivery}>Take</Button>
    )
}