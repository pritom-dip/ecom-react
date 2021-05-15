import React from 'react';
import { useSelector } from 'react-redux';

const CheckoutSidebar = () => {

    const carts = useSelector(state => state.cart);

    return (
        <div className="col-md-4 order-md-2 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted">Your cart</span>
                <span className="badge badge-secondary badge-pill">{carts.length}</span>
            </h4>
            <ul className="list-group mb-3">
                {
                    carts?.map(product => {
                        return (
                            <li key={product?.id} className="list-group-item d-flex justify-content-between">
                                <div>
                                    <h6 className="my-0">{product?.title}</h6>
                                </div>
                                <span className="text-muted">${(parseFloat(product?.price) * parseInt(product?.quantity).toFixed(2))}</span>
                            </li>
                        )
                    })
                }
            </ul>

            {/* <form className="card p-2">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Promo code" />
                    <div className="input-group-append">
                        <button type="submit" className="btn btn-secondary">Redeem</button>
                    </div>
                </div>
            </form> */}

        </div>
    );
};

export default CheckoutSidebar;