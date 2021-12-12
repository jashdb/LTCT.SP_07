import React from "react";

import {
  FormGroup,
  Label,
  Input,
} from "reactstrap";

import {Button} from "reactstrap";

export default function CreateDelivery() {
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
                    />
                    <br/>
                </FormGroup>
                <FormGroup>
                    <Label for="customerName">Customer Name</Label>
                    <Input
                        type="text"
                        name="customerName"
                        id="customerName"
                        placeholder="Enter customerName"
                    />
                    <br/>
                </FormGroup>
                <FormGroup>
                    <Label for="customerPhone">Customer Phone number</Label>
                    <Input
                        type="phone"
                        name="customerPhone"
                        id="customerPhone"
                        placeholder="Enter customerPhone"
                    />
                    <br/>
                </FormGroup>
                <FormGroup>
                    <Label for="shipperId">Shipper's ID</Label>
                    <Input
                        type="text"
                        name="shipperId"
                        id="shipperId"
                        placeholder="Enter shipperId"
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
                    />
                    <br/>
                </FormGroup>
                <FormGroup>
                    <Label for="shippingFee">Shipping Fee</Label>
                    <Input
                        type="text"
                        name="shippingFee"
                        id="shippingFee"
                        placeholder="Enter shippingFee"
                    />
                    <br/>
                </FormGroup>
                <Button color="primary" type="submit">
                    Submit
                </Button>
            </form>
        </div>
    )
}