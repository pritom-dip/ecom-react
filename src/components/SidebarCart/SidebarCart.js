import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaTrashAlt } from "react-icons/fa";
import { removeFromCart } from '../../store/actions/cartActions';

const SidebarCart = ({ active, setActive }) => {
    const carts = useSelector(state => state.cart);
    const subtotal = carts.reduce((initial, element) => {
        return initial + (parseFloat(element.price) * parseInt(element.quantity));
    }, 0);
    const dispatch = useDispatch();

    const handleDeleteProcuct = id => {
        dispatch(removeFromCart(id));
    }

    return (
        <nav id="sidebar-wrapper" className={active ? `active` : ''}>
            <div className="sidebar-nav">
                <div onClick={() => setActive(false)} id="close-menu">
                    <a href="#" className="pull-right toggle square"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
                </div>
                <h4 className="title">Items <em>{carts.length}</em></h4>
                <ul className="items">
                    {
                        carts?.map(product => {
                            return (
                                <li key={product?.id}>
                                    <img style={{ height: '80px' }} src={product?.image} alt="" />
                                    <h4>Hoodies Cute Panda</h4>
                                    <FaTrashAlt onClick={() => handleDeleteProcuct(product.id)} style={{ position: 'absolute', top: '0', right: '0', cursor: 'pointer' }} />
                                    <span className="qty">Quantity: {product?.quantity}</span>
                                    <span className="price">${product?.price}</span>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="down-content">
                    <h6>Subtotal: <em>${subtotal.toFixed(2)}</em></h6>
                    <div className="main-dark-button"><a href="product-details-v1.html">Checkout Now</a></div>
                    <div className="border-dark-button"><a href="product-details-v1.html">Continue Shopping</a></div>
                </div>
            </div>
        </nav>
    );
};

export default SidebarCart;