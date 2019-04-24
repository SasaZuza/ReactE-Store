import React from 'react'

export default function CartItem({ item, value }) {
    // Here we did destructuring to access values from 'context.js'
    // Accessing values from the 'item' in 'context.js'
    const { id, title, img, price, total, count } = item;
    // Accessing methods from the 'value' in 'context.js'
    const { increment, decrement, removeItem } = value;

    return (
        // Adding a row
        <div className="row my-2 text-capitalize text-center">

            {/* Column for product image */}
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} style={{ width: "5rem", height: "5rem" }} className="img-fluid" alt="product" />
            </div>

            {/* Column for product title */}
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">Product: </span> {title}
            </div>

            {/* Column for product price */}
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">Price: </span> {price}
            </div>

            {/* Column for icrementing, decrementing products in cart and product total */}
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        {/* Button for decrement */}
                        <span className="btn btn-black mx-1" onClick={() => decrement(id)}>-</span>
                        {/* Counting items added in cart */}
                        <span className="btn btn-black mx-1">{count}</span>
                        {/* Button for increment */}
                        <span className="btn btn-black mx-1" onClick={() => increment(id)}>+</span>
                    </div>
                </div>
            </div>

            {/* Column for remove icon */}
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={() => removeItem(id)}>
                    <i className="fas fa-trash"></i>
                </div>
            </div>

            {/* Column for product total in cart */}
            <div className="col-10 mx-auto col-lg-2">
                <strong> Item total: $ {total} </strong>
            </div>

        </div>
    )
}
