import React, { Component } from 'react'
// Importing 'ProductConsumer' that access data from 'ProductContext' in 'context.js' file
import { ProductConsumer } from '../context'
// Importing 'Link' options and also 'Button' component
import { Link } from 'react-router-dom'
import { ButtonContainer } from './Button'

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    // Here we do destructuring to access all values about product from 'data.js' file
                    const { id, company, img, price, title, info, inCart } = value.detailProduct;
                    // Returning those values here
                    return (
                        <div className="container py-5">

                            {/* Title */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>

                            {/* product info */}
                            <div className="row">
                                {/* product image */}
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt="product" />
                                </div>
                                {/* product text info */}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2> Model: {title} </h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        Made by: <span className="text-uppercase">
                                            {company}
                                        </span>
                                    </h4>
                                    {/* product price */}
                                    <h4 className="text-blue">
                                        <strong>
                                            price: <span>$</span>{price}
                                        </strong>
                                    </h4>
                                    {/* detailed info about project */}
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        Info about product:
                                    </p>
                                    <p className="text-muted lead">
                                        {info}
                                    </p>
                                    {/* buttons */}
                                    <div>
                                        {/* First button to go back to products page */}
                                        <Link to='/'>
                                            <ButtonContainer>
                                                Back to products
                                            </ButtonContainer>
                                        </Link>

                                        {/* Second button to add to cart product with activating onClick method 'addToCart' and 'openModal' from 'context.js' page */}
                                        <ButtonContainer cart disabled={inCart ? true : false} onClick={() => {
                                            value.addToCart(id);
                                            value.openModal(id);
                                        }}>
                                            {inCart ? "in Cart" : "add to cart"}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
