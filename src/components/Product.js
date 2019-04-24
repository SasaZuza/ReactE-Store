import React, { Component } from 'react'
// Importing styled-components instaled on terminal with 'npm install --save styled-components'
import styled from 'styled-components'
// Importing link so clicking on individual component it goes to detail description of it 
import { Link } from 'react-router-dom';
// Importing 'ProductConsumer' that access data from 'ProductContext' in 'context.js' file
import { ProductConsumer } from '../context';
// Importing prop types that defines type of props we use in our app 
import PropTypes from 'prop-types'


export default class Product extends Component {
    render() {

        // Adding const to access properties for products that are defined in 'ProductList.js'
        const { id, title, img, price, inCart } = this.props.product;

        return (

            // Showing this styled component with some bootstrap classes
            // Adding link to go to 'Details.js' component after clicking on it
            // In <Link> adding 'img' that is accessed throught const created above and with it throught 'ProductList.js' and 'data.js'
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">

                    {/* Wrapping everything into 'ProductConsumer' and displaying JSX content with function as bellow */}
                    <ProductConsumer>
                        {(value) => (
                            <div className="img-container p-5" onClick={() => value.handleDetail(id)}>

                                <Link to="/details">
                                    <img src={img} alt="product" className="card-img-top"></img>
                                </Link>

                                {/* Adding button to add data to chart */}
                                <button className="cart-btn" disabled={inCart ? true : false} onClick={() => {
                                    // Adding those two methods here
                                    value.addToCart(id);
                                    value.openModal(id);
                                }}>
                                    {/* Thernary operator that shows if item is added to cart text or some icon if not added to cart */}
                                    {inCart ? (<p className="text-capitalize mb-0" disabled>In Cart</p>) : <i className="fas fa-cart-plus" />}
                                </button>

                            </div>
                        )}
                    </ProductConsumer>

                    {/* Footer for product card */}
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0"> {title} </p>

                        <h5 className="text-blue font-italic mb-0">
                            <span className="mr-1">$</span>
                            {price}
                        </h5>
                    </div>

                </div>

            </ProductWrapper>
        )
    }
}

// Prop types options
Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
}


// Creating styled components

const ProductWrapper = styled.div`

    .card {
        border-color: transparent;
        transition: all 1s linear;
    }

    .card-footer {
        background: transparent;
        border-top: transparent;
        transition: all 1s linear;
    }

    &:hover {
        .card{
            border: 0.04rem solid rgba(0,0,0,0.2);
            box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
        }
        .card-footer{
            background: rgba(247, 247, 247);
        }
    }

    .img-container {
        position:relative;
        overflow: hidden;
    }

    .card-img-top {
        transition: all 1s linear; 
    }

    .img-container:hover .card-img-top {
        transform: scale(1.2);
    }

    .cart-btn {
        position: absolute;
        bottom:0;
        right:0;
        padding: 0.2rem 0.4rem;
        background: var(--lightBlue);
        border:none;
        color: var(--mainWhite);
        font-size: 1.4rem;
        border-radius: 0.5rem 0 0 0;
        transform: translate(100%, 100%);
        transition: all 1s linear;
    }

    .img-container:hover .cart-btn {
        transform: translate(0, 0);
    }

    .cart-btn:hover {
        color: var(--mainBlue);
        cursor: pointer;
    }

`;
