import { Button } from "reactstrap"
import {useHistory} from 'react-router-dom';
import { useDispatch } from "react-redux";
import actionLogout from "redux/actions/actionLogout";
import actionUpdateSidebar from "redux/actions/actionUpdateSidebar";

export default function LogoutButton() {
    const dispatch = useDispatch();
    const history = useHistory();
    const gotoLoginPage = () => {
        dispatch(actionLogout());
        dispatch(actionUpdateSidebar("logout"));
        history.push("/admin/login");
    }
    return (
        <Button color="info" onClick={gotoLoginPage}>Logout</Button>
    )
}