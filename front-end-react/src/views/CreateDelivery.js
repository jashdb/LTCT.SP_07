import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";

import {
  FormGroup,
  Label,
  Input,
} from "reactstrap";

import {Button} from "reactstrap";
import swal from "sweetalert";

export default function CreateDelivery() {
    const history = useHistory();
    const [state, setState] = useState({
        customerId: 0,
        orderId: 0,
        deliveryAddress: "",
        cost: 0,
        district: "option1",
        shippingFee: 0,
    });

    // Select district
    // const handleDistrict = (e) => {
    //     handleChange(e);
    // }

    // const confirmDistrict = () => {
    //     console.log(state.district);
    // }

    const handleChange = (e) => {
		setState({...state, [e.target.name]: e.target.value });
	}

    // const [productList, setProductList] = useState([]);
    // const addProduct = (e) => {
    //     setProductList(productList.concat(
    //         <div>
    //             <table width="100%">
    //                 <td>
    //                     <Input type="text" name="productName" placeholder="Enter productName"/>
    //                 </td>
    //                 <td>
    //                     <Input type="text" name="productId" placeholder="Enter productId"/>
    //                 </td>
    //                 <td>
    //                     <Input type="text" name="count" placeholder="Enter count"/>
    //                 </td>
    //             </table>
    //         </div>
    //     ))
    // }

    const submit = async () => {
        const data = state;
        const res = await axios.post('/api/createDelivery', data);
        console.log(res);
        if (res.data.status === 200) {
            swal("Done !" , res.data.message, "success").then(() => history.push("/my-deliveries"));
        } else if (res.data.status === 201) {
            swal("Warning !" , res.data.message, "warning");
        } else{
            swal("Error", "Some errors occured!", "error");
        }
    }

    return (
        <div className="content">
            <form>
                <FormGroup>
                    <Label for="customerId">Customer's ID</Label>
                    <Input
                        type="text"
                        name="customerId"
                        id="customerId"
                        placeholder="Enter customerId"
                        onChange={handleChange}
                    />
                    <br/>
                </FormGroup>
                <FormGroup>
                    <Label for="orderId">Order ID</Label>
                    <Input
                        type="phone"
                        name="orderId"
                        id="orderId"
                        placeholder="Enter orderId"
                        onChange={handleChange}
                    />
                    <br/>
                </FormGroup>
                <FormGroup>
                    <Label for="deliveryAddress">Delivery Address</Label>
                    <Input
                        type="text"
                        name="deliveryAddress"
                        id="deliveryAddress"
                        placeholder="Enter deliveryAddress"
                        onChange={handleChange}
                    />
                    <br/>
                </FormGroup>
                <FormGroup>
                    <Label for="cost">Order Cost</Label>
                    <Input
                        type="text"
                        name="cost"
                        id="cost"
                        placeholder="Enter cost"
                        onChange={handleChange}
                    />
                    <br/>
                </FormGroup>
                {/* <FormGroup>
                    {productList}
                    <Button color="primary" onClick={addProduct}>
                        Add Product
                    </Button>
                </FormGroup>
                <FormGroup>
                    <Label for="district">District</Label>
                    <Input type="select" name="district" id="district" onChange={handleDistrict}>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </Input>
                    <Button color="primary" onClick={confirmDistrict}>
                        Ok
                    </Button>
                </FormGroup> */}
                <FormGroup>
                    <Label for="shippingFee">Shipping Fee</Label>
                    <Input
                        type="text"
                        name="shippingFee"
                        id="shippingFee"
                        placeholder="Enter shippingFee"
                        onChange={handleChange}
                    />
                    <br/>
                </FormGroup>
                <Button color="primary" onClick={submit}>
                    Submit
                </Button>
            </form>
        </div>
    )
}