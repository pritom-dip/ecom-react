import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/actions/cartActions';
import { getAllProdcuts } from '../../store/actions/productActions';
import { getAllUsers } from '../../store/actions/userActions';

const Products = () => {

    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products);
    const cart = useSelector(state => state.cart);

    useEffect(() => {
        dispatch(getAllProdcuts());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);

    const handleAddCart = product => {
        dispatch(addToCart(product));
    }

    return (
        <section className="recent-products mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-heading">
                            <h2>Featured Products</h2>
                            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, atque?</span>
                        </div>
                    </div>

                    {
                        products?.map(product => {
                            return (
                                <div key={product?.id} className="col-lg-3">
                                    <div className="recent-item">
                                        <div className="thumb">
                                            <div className="hover-content">
                                                <ul className="icons">
                                                    <li><a href="product-details-v1.html"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></a></li>
                                                    <li><a href="product-details-v1.html"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg></a></li>
                                                    <li onClick={() => handleAddCart(product)}>
                                                        <a>
                                                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1">
                                                                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line>
                                                                <path d="M16 10a4 4 0 0 1-8 0"></path>
                                                            </svg>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <img style={{ height: '300px' }} className="img-fluid" src={product?.image} alt={product?.title} />
                                        </div>
                                        <div className="down-content">
                                            <h4><a href="product-details-v1.html">{product?.title}</a></h4>
                                            <span className="price">${product?.price}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                    <div className="col-lg-12">
                        <div className="border-dark-button">
                            <a href="all-products.html">View All Products</a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Products;