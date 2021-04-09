import React from 'react';
import './app.scss';
// import { Provider } from 'react-redux';
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';
import Products from './components/products/Products.js';
// import store from './store/index.js';
import SimpleCart from './components/simpleCart/Simplecart.js';
import { Route } from 'react-router-dom';
import Cart from './components/cart/Cart.js';
import Details from './components/details/Details.js';
// import Storefront from './components/storefront/Storefront.js';

function App() {
  return (
    <>
      {/* <Provider store={store()}> */}
      <Header />
      <SimpleCart />
      <main>
        <Route exact path="/" component={Products} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/details/:id" component={Details} />
        {/* <Route exact path="/details" component={Details} /> */}
        {/* <Products /> */}
      </main>
      <Footer />
      {/* </Provider> */}
    </>
  );
}

export default App;
