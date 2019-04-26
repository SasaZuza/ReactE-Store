import React, { Component } from 'react';
// importing 'Title' component from 'components' folder
import Title from '../Title';

// Importing those components
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';

// Importing 'ProductConsumer' frrom 'context.js' file
import { ProductConsumer } from '../../context';

// Importing those components
import CartList from './CartList';
import CartTotals from './CartTotals';

export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name='my' title='cart' />
                  <CartColumns />
                  {/* Here we access values from 'context.js' file */}
                  <CartList value={value} />
                  <CartTotals value={value} history={this.props.history} />
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
