import { Button } from "reactstrap"
import {useHistory} from 'react-router-dom';

export default function GoToDeliveryButton() {
    const history = useHistory();
    const goToDeliveryPage = () => {
        history.push("/admin/delivery");
    }
    return (
        <Button color="info" onClick={goToDeliveryPage}>Info</Button>
    )
}