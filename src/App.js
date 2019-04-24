import React, { Component } from 'react';
import './App.css';

// Importing stuff from React router installed on terminal with 'npm install --save react-router-dom'
import { Switch, Route } from 'react-router-dom';

// Importing bootstrap that we instaled in terminal with 'npm install --save bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing other components that are created
import Navbar from './components/Navbar'
import Productlist from './components/ProductList'
import Details from './components/Details'
import Cart from './components/Cart'
import Default from './components/Default'
import Modal from './components/Modal'

class App extends Component {
  render() {
    return (

      <React.Fragment>
        {/* Addedt components that are created and imported */}
        <Navbar />

        {/* Using Switch and Route to set routes for our components */}
        <Switch>
          <Route exact path="/" component={Productlist} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>

    );
  }
}

export default App;
