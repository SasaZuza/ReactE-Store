import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// Importing logo that will be used in navbar
import logo from '../logo.svg'
// Importing styled-components instaled on terminal with 'npm install --save styled-components'
import styled from 'styled-components'
// Importing 'Button.js' file in which is stored styled-component for button 
import { ButtonContainer } from "./Button"


export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                {/*https://www.iconfinder.com/icons/1243689/call_phone_icon
                Creative Commons (Attribution 3.0 Unported);
                https://www.iconfinder.com/Makoto_msk */}
                {/* For using icons from iconsfinder we need to add this comment */}
                {/* Adding logo at navbar */}
                <Link to="/">
                    <img src={logo} alt="store" className="navbar-brand" />
                </Link>

                {/* Adding Products link to navbar */}
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">Products</Link>
                    </li>
                </ul>

                {/* added styled component as a button */}
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fas fa-cart-plus" />
                        </span>
                        My Cart
                    </ButtonContainer>
                </Link>

            </NavWrapper>
        );
    }
}


// This is a way of creatinga and adding styled components to app
const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link {
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
` 
