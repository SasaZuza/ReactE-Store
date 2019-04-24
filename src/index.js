import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// Importing browser router from react-router-dom so all app can use router
import { BrowserRouter as Router } from 'react-router-dom';
// Importing contextAPI or ProductProvider object
import { ProductProvider } from './context'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(

    // Wrapping all the context of app with Router into 'ProductProvider' imported from 'context.js' file
    <ProductProvider>
        {/* Wrapping all our app into Router tag so all app can use Router */}
        < Router >
            <App />
        </Router >
    </ProductProvider>,

    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
