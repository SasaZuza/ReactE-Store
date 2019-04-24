import React from 'react'
// Importing this component
import CartItem from './CartItem';

export default function CartList({ value }) {
    // Here we did destructuring to access values from 'context.js'
    const { cart } = value;

    return (
        <div className="container-fluid">
            {/* Displaying products */}
            {cart.map(item => {
                return <CartItem key={item.id} item={item} value={value} />
            })}
        </div>
    )
}
