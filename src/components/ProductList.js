import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'
// Importing 'ProductConsumer' that access data from 'ProductContext' in 'context.js' file
import { ProductConsumer } from '../context';

export default class ProductList extends Component {

    render() {

        return (

            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="My" title="products" />
                        <div className="row">
                            {/* Adding this property to this component */}
                            <ProductConsumer>
                                {/* To access data we always use arrow functions and access the value form 'ProductContext.Provider' in ''context.js file */}
                                {value => {
                                    // Accessing store products props and maping throught
                                    return value.products.map(product => {
                                        // Here we use another function to return <Product /> component with all content that is defined inside of it
                                        // product={product} - defining data that is added for products in 'data.js' file
                                        return <Product key={product.id} product={product} />;
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>

        )
    }
}
