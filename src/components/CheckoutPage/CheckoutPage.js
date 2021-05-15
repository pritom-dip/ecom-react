import React, { useState } from 'react';
import CheckoutSidebar from '../CheckoutSidebar/CheckoutSidebar';
import { useForm } from "react-hook-form";

const CheckoutPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [paymentMethod, setPaymentMethod] = useState('');

    const onSubmit = data => console.log(data);

    return (
        <div className="container mb-5">
            <div className="row">

                <CheckoutSidebar />

                <div className="col-md-8 order-md-1">
                    <h4 className="mb-3">Billing address</h4>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="firstName">First name*</label>
                                <input {...register("firstName", { required: true })} type="text" className="form-control" id="firstName" placeholder="First Name" />
                                {errors.firstName && <span className="text-danger">First name is required.</span>}

                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="lastName">Last name*</label>
                                <input type="text" {...register("lastName", { required: true })} className="form-control" id="lastName" placeholder="Last Name" />
                                {errors.lastName && <span className="text-danger">Last name is required.</span>}
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="username">Username*</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">@</span>
                                </div>
                                <input style={{ width: '90%' }} type="text" {...register("userName", { required: true })} className="form-control" id="username" placeholder="Username" />
                                {errors.userName && <div className="text-danger">Username is required.</div>}
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email">Email*</label>
                            <input {...register("email", { required: true })} type="email" className="form-control" id="email" placeholder="you@example.com" />
                            {errors.email && <span className="text-danger">Email is required.</span>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="address">Address</label>
                            <input {...register("address1", { required: true })} type="text" className="form-control" id="address" placeholder="Address one" />
                            {errors.address1 && <span className="text-danger">Email is required.</span>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="address2">Address 2 <span className="text-muted">(Optional)</span></label>
                            <input {...register("address2")} type="text" className="form-control" id="address2" placeholder="Address two" />
                        </div>

                        <h4 className="mb-3">Payment</h4>

                        <div className="d-block my-3">

                            <div className="custom-control custom-radio">
                                <input onClick={() => setPaymentMethod('stripe')} {...register("paymentMethod", { required: true })} id="debit" name="paymentMethod" type="radio" className="custom-control-input" />
                                <label className="custom-control-label" htmlFor="debit">Stripe</label>
                            </div>
                            <div className="custom-control custom-radio">
                                <input onClick={() => setPaymentMethod('paypal')} {...register("paymentMethod", { required: true })} id="paypal" name="paymentMethod" type="radio" className="custom-control-input" />
                                <label className="custom-control-label" htmlFor="paypal">PayPal</label>
                            </div>
                            {errors.paymentMethod && <span className="text-danger">Please select a payment method.</span>}
                        </div>

                        {/* {
                            paymentMethod === 'stripe' &&
                        } */}





                        <button className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
                    </form>
                </div>
            </div>

        </div>

    );
};

export default CheckoutPage;