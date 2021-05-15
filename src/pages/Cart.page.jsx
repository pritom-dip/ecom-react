import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { useDispatch } from 'react-redux';
import { FaTrashAlt } from "react-icons/fa";
import { removeFromCart, updateCart } from '../store/actions/cartActions';

const Cart = () => {

    const carts = useSelector(state => state.cart);
    const grandTotal = carts.reduce((initial, element) => {
        return initial + (parseFloat(element.price) * parseInt(element.quantity));
    }, 0);
    const dispatch = useDispatch();

    const handleDeleteProcuct = id => {
        dispatch(removeFromCart(id));
    }

    const handleUpdateProduct = (id, e) => {
        dispatch(updateCart(id, e.target.value));
    }

    return (
        <>
            <Header />

            <div className="container">

                <div className="row">
                    <div className="col-md-12">

                        <table className="table table-hover cart-page">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th style={{ textAlign: 'center' }}>Quantity</th>
                                    <th>Total</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    carts.length > 0 && carts?.map(product => {
                                        return (
                                            <tr key={product?.id}>
                                                <td>
                                                    <div className="row align-items-center">
                                                        <div className="col-sm-2 hidden-xs">
                                                            <img style={{ height: '100px' }} src={product?.image} alt={product?.title} className="img-responsive" />
                                                        </div>
                                                        <div className="col-sm-10">
                                                            <h4 className="nomargin">{product?.title}</h4>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td >${product?.price}</td>
                                                <td style={{ textAlign: 'center' }}>
                                                    <input min="0" onChange={(event) => handleUpdateProduct(product?.id, event)} style={{ width: '50%' }} type="number" className="form-control text-center" defaultValue={product?.quantity} />
                                                </td>
                                                <td style={{ paddingRight: '15px' }} className="text-center">${(parseFloat(product.price) * parseInt(product?.quantity)).toFixed(2)}</td>
                                                <td className="actions">
                                                    <button className="btn btn-danger btn-sm" style={{ cursor: 'pointer' }}>
                                                        <FaTrashAlt onClick={() => handleDeleteProcuct(product.id)} />
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>

                        </table>

                        <div className="cart-buttons mt-4 pull-right">
                            <div className="col-lg-12">
                                <div className="border-dark-button">
                                    <h5>Grand Total : ${grandTotal}</h5>
                                    <a href="all-products.html">Proceed to checkout</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />

        </>
    );
};

export default Cart;