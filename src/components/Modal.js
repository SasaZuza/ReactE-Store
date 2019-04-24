import React, { Component } from 'react'
import styled from 'styled-components';
// Importing 'ProductConsumer' that access data from 'ProductContext' in 'context.js' file
import { ProductConsumer } from '../context';
// Importing 'Button.js' file in which is stored styled-component for button 
import { ButtonContainer } from "./Button"
import { Link } from 'react-router-dom';


export default class componentName extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    // Accessing this values (methods) from 'context.js' file state 
                    const { modalOpen, closeModal } = value;
                    // Accesing this values so they can be displayed in modal on click by product id
                    const { img, title, price } = value.modalProduct;
                    // If Modal is not opened (set to true) we return nothing
                    if (!modalOpen) {
                        return null;
                        // If modal is open return it - we use styled component for that
                    } else {
                        return (
                            <ModalContainer>
                                <div className="container">
                                    <div className="row">
                                        <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                            {/* Adding elements of the modal */}
                                            <h5> Item added to the cart </h5>
                                            <img src={img} className="img-fluid" alt="product" />
                                            <h5>{title}</h5>
                                            <h5 className="text-muted">Price: $ {price} </h5>
                                            {/* This link goes to homepage and closes the modal */}
                                            <Link to='/'>
                                                <ButtonContainer onClick={() => closeModal()}>
                                                    Store
                                                </ButtonContainer>
                                            </Link>
                                            {/* This link goes to cart route and closes the modal */}
                                            <Link to='/cart'>
                                                <ButtonContainer cart onClick={() => closeModal()}>
                                                    Go to cart
                                                </ButtonContainer>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>
                        );
                    }
                }}
            </ProductConsumer>
        );
    }
}


// Seting up styled component for Modal displaying
const ModalContainer = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: rgba(0,0,0,0.3);
display: flex;
align-items: center;
justify-content: center;
#modal {
    background: var(--mainWhite);
}
`;