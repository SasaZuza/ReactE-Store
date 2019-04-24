import React, { Component } from 'react'
// Importing data from 'data.js' file about products 
import { storeProducts, detailProduct } from './data'


// This is way of creating context object
const ProductContext = React.createContext();
/* It has two elements:
- Provider - provides all info about product that are stored
- Consumer - With it we access desired data in Provider 
*/

// We create this file so it store data for products that all other components can access
class ProductProvider extends Component {

    // Creating state in here
    state = {
        // Adding this props and connecting them to imported values from 'data.js' file
        products: [],
        detailProduct: detailProduct,
        // Adding the 'cart' prop that is defined after changing values in 'addToCart' method
        cart: [],
        // Adding props for modals that shows when we click on product
        modalOpen: false,
        // Also 'modalProduct' that is equal to 'detailProduct' and accessed throught id
        modalProduct: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    };

    // Creating life-cycle method 
    componentDidMount() {
        // Geting copied values of products defined in 'setProducts()' method
        this.setProducts();
    }

    // Adding method to set products that are imported from 'data.js' file
    setProducts = () => {
        let tempProducts = [];
        // Looping throught 'storeProducts' in 'data.js' file
        storeProducts.forEach(item => {
            // This will assign values from 'storeProducts' to this 'singleItem' const
            // We are coping the values and not referencing to them so we can manipulate with data 
            // By that it means that we can change values of items but not in 'storeProducts' and 'data.js' file
            const singleItem = { ...item };
            // Here we assign to products old values of item and new changed values with 'singleItem' const
            tempProducts = [...tempProducts, singleItem]
        })
        // Here we set state and return 'tempProducts' that is empty array
        this.setState(() => {
            return { products: tempProducts }
        })
    };


    // Adding methods to hangle some data on app:

    // 1. Method that show product by it's id
    getItem = id => {
        // Wiith find() we check if items id in 'products' is equal passed id from this method
        const product = this.state.products.find(item => item.id === id);
        return product;
    }


    // 2. Handles and display details about products
    handleDetail = id => {
        // We have const variable product that is equal to product defined in 'getItem' method
        const product = this.getItem(id);
        // When we select product by it's id we return 'detailProduct' from product array
        this.setState(() => {
            return { detailProduct: product }
        })
    };


    // 3. Adding to chart products and with some visual effects
    addToCart = id => {
        // Creating temp array that access all product in 'state' with spread operator
        let tempProducts = [...this.state.products];
        // This const connect with 'tempProduct' and with using of 'getItem' access product by it id
        const index = tempProducts.indexOf(this.getItem(id));
        // Here we set up this variable to specific index that is defined in line above
        const product = tempProducts[index];
        // Since we added product to cart we change it's value also for 'inCart = true'
        product.inCart = true;
        // Changing count option to 1 (before it was 0)
        product.count = 1;
        // Creating variable to which we assign product price
        const price = product.price;
        // product total value is equal to that price (because we adden one product)
        product.total = price;

        // Setting state and first changing 'products' prop from state and seting it to 'tempProducts'
        // Also as second parameter we add cart props that is equal to prop 'chart' from state 
        // Third parameter is 'product' from this method
        this.setState(() => {
            return { products: tempProducts, cart: [...this.state.cart, product] };
        },
            // This is moment when we add values of items into cart (subtotal, tax and total)
            () => { this.addTotals() }
        )
    };


    // 4. Method for seting Modal open by clicking on products
    openModal = id => {
        // Accesing product by it's id
        const product = this.getItem(id);
        this.setState(() => {
            // On click we want to display info about product and open Modal window
            return { modalProduct: product, modalOpen: true }
        })
    };


    // 5. Method for seting Modal closed 
    closeModal = () => {
        this.setState(() => {
            return { modalOpen: false }
        })
    }


    // 6. Incrementation of products added to cart
    increment = (id) => {
        // Variables for seting temp values for cart        
        let tempCart = [...this.state.cart];
        // Selecting an incrementing product bz matching id
        const selectedProduct = tempCart.fint(item => item.id === id);

    }


    // 7. Decrementation of products added to cart
    decrement = (id) => {
        console.log('This is decrement method');
    }


    // 8. Method for removing product from the cart
    removeItem = (id) => {
        // Variables for seting temp values for products and for cart
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];

        // Remove only product from cart with id that is selected (leave all the rest products)
        tempCart = tempCart.filter(item => item.id !== id);

        // Similar thing for tempProducts array - seting index of product
        const index = tempProducts.indexOf(this.getItem(id));
        // Seting removed products
        let removedProduct = tempProducts[index];
        // Seting some properties for the product after removing it from cart

        // 1. Seting that it's no more in cart
        removedProduct.inCart = false;
        // 2. Seting count back to 0
        removedProduct.count = 0;
        // 3. Seting total back to 0
        removedProduct.total = 0;

        // Seting new state
        this.setState(() => {
            return {
                cart: [...tempCart],
                products: [...tempProducts]
            };
        }, () => {
            this.addTotals();
        })
    }


    // 9. Method for clearing all cart - returning empty array
    clearCart = () => {
        this.setState(() => {
            return { cart: [] }
        }, () => {
            // Seting all products to default values after deleting them - in cart, total values ...
            this.setProducts();
            this.addTotals();
        });
    };


    // 10. Adding totals to the cart
    addTotals = () => {
        // Seting subtotal value for the beggining at 0
        let subTotal = 0;
        // Looping through cart with 'map' and adding values of items in cart to this 'subTotal'
        this.state.cart.map(item => (subTotal += item.total));
        // Seting variable for tempTax - without setng decimals
        const tempTax = subTotal * 0.17;
        // Seting tax and with 'toFixed' method adding two decimals to it
        const tax = parseFloat(tempTax.toFixed(2));
        // Seting total value (subtotal + tax)
        const total = subTotal + tax;
        // Adding this values to state
        this.setState(() => {
            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total
            }
        })
    };


    render() {
        return (
            // We return Product context object with all of it children elements
            // We can use 'value' options like objects and add properties and methods there
            <ProductContext.Provider value={{
                // We use this destructuring to access all props from state at once and methods also
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    };
}


// Consumer
const ProductConsumer = ProductContext.Consumer;

// Exporting created elements
export { ProductProvider, ProductConsumer }
