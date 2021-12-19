import { Button } from "reactstrap"
import {useHistory} from 'react-router-dom';

export default function GoToDeliveryButton(props) {
    const history = useHistory();
    const goToDeliveryPage = () => {
        history.push("/admin/delivery/" + props.deliveryId);
    }
    return (
        <Button color="info" onClick={goToDeliveryPage}>Info</Button>
    )
}