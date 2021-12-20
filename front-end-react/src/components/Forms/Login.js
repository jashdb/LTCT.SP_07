import "assets/css/forms/loginform.css";
import axios from 'axios';
import { useState } from "react";
import swal from 'sweetalert';
import {useHistory} from 'react-router-dom';
import { useDispatch } from "react-redux";
import actionLogin from "redux/actions/actionLogin";
import actionUpdateSidebar from "redux/actions/actionUpdateSidebar";
import { FormGroup, Input, Label } from "reactstrap";

function LoginForm() {
    const history = useHistory();
    const dispatch = useDispatch();

    var registerTmpInfo = {
        username: '',
        password: '',
        fullname: '',
        email: '',
        role: 0,
    }

    const [loginInfo, setLoginInfo] = useState({
            username: '',
            password: '',
    });


    //Register
    const handleRegisterInput = (e) => {
		e.persist();
		switch (e.target.name) {
            case 'username':
                registerTmpInfo.username = e.target.value
                break;
            case 'password':
                registerTmpInfo.password = e.target.value
                break;
            case 'fullname':
                registerTmpInfo.fullname = e.target.value
                break;
            case 'email':
                registerTmpInfo.email = e.target.value
                break;
            case 'role':
                registerTmpInfo.role = (e.target.checked ? 1 : 0)
                console.log(registerTmpInfo)
                break; 
            default:
                break;
        }
	}

    const submitRegister = async (e) => {
        e.preventDefault();
        const data = registerTmpInfo;

        const res = await axios.post('/api/register', data);
        console.log(res.data);

        if (res.data.status === 200) {
            try {
                dispatch(actionLogin(res.data.user));
                if (res.data.user.role === 0) dispatch(actionUpdateSidebar("customer"));
                else if (res.data.user.role === 1) dispatch(actionUpdateSidebar("shipper"));
                swal(res.data.message, "Welcome to Delivery Module, " + res.data.user.fullname + "!", "success").then(() => history.push("/my-deliveries"));
            }
            catch(err) {
                swal("Error", err.message, "error");
            }
        }
    }

    //Login
    const handleLoginInput = (e) => {
		e.persist();
		setLoginInfo({...loginInfo, [e.target.name]: e.target.value })
	}

    const login = async (e) => {
        e.preventDefault();
        const data = loginInfo;

        const res = await axios.post('/api/login', data);
        console.log(res.data);

        if (res.data.status === 200) {
            try {
                dispatch(actionLogin(res.data.user));
                if (res.data.user.role === 0) dispatch(actionUpdateSidebar("customer"));
                else if (res.data.user.role === 1) dispatch(actionUpdateSidebar("shipper"));
                swal(res.data.message, "Welcome back, " + res.data.user.fullname + "!", "success").then(() => history.push("/my-deliveries"));
            }
            catch(err) {
                swal("Error", err.message, "error");
            }
        }
    }

    return (
        <div className="login-wrap">
            <div className="login-html">
                <input id="tab-1" type="radio" name="tab" className="sign-in" checked/><label for="tab-1" className="tab">Sign In</label>
                <input id="tab-2" type="radio" name="tab" className="sign-up"/><label for="tab-2" className="tab">Sign Up</label>
                <div className="login-form">
                    <div className="sign-in-htm">
                        <div className="group">
                            <label for="loguser" className="label">Username</label>
                            <input id="loguser" type="text" className="input" name="username" onChange={handleLoginInput}/>
                        </div>
                        <div className="group">
                            <label for="logpass" className="label">Password</label>
                            <input id="logpass" type="password" className="input" data-type="password" name="password" onChange={handleLoginInput}/>
                        </div>
                        <div className="group">
                            <input id="check" type="checkbox" className="check" unchecked/>
                            <label for="check"><span className="icon"></span> Keep me Signed in</label>
                        </div>
                        <div className="group">
                            <input type="submit" className="button" value="Sign In" onClick={login}/>
                        </div>
                        <div className="hr"></div>
                        <div className="foot-lnk">
                            <a href="#forgot">Forgot Password?</a>
                        </div>
                    </div>
                    <div className="sign-up-htm">
                        <div className="group">
                            <label for="username" className="label">Username</label>
                            <input id="username" type="text" className="input" name="username" onChange={handleRegisterInput}/>
                        </div>
                        <div className="group">
                            <label for="fullname" className="label">Full name</label>
                            <input id="fullname" type="text" className="input" name="fullname" onChange={handleRegisterInput}/>
                        </div>
                        <div className="group">
                            <label for="pass" className="label">Password</label>
                            <input id="pass" type="password" className="input" data-type="password" name="password" onChange={handleRegisterInput}/>
                        </div>
                        <div className="group">
                            <label for="email" className="label">Email Address</label>
                            <input id="email" type="text" className="input" name="email" onChange={handleRegisterInput}/>
                        </div>
                        <FormGroup check>
                            <Label check>
                            <Input type="checkbox" name="role" onChange={handleRegisterInput}/>{' '}
                                I'm shipper
                            <span className="form-check-sign">
                                <span className="check"></span>
                            </span>
                            </Label>
                        </FormGroup>
                        <br/>
                        <div className="group">
                            <input type="submit" className="button" value="Sign Up" onClick={submitRegister}/>
                        </div>
                        <div className="foot-lnk">
                            <label for="tab-1">Already Member?</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm