import React, { Component } from "react";
// import ProductsAndSuppliers from "./Components/ProductsAndSuppliers";
import { Provider } from 'react-redux';
import { Link, Route, Router } from "react-router-dom";
import { ProductDisplay } from "./Components/ProductDisplay";
import Routering from "./Components/Routering";
import { Selector } from "./Components/Selector";
import { SupplierDisplay } from "./Components/SupplierDisplay";
import dataStore from './Store'
import StoreAccess from "./Store/StoreAccess";

export default class App extends Component {

  render() {
    return (
      <Provider store={dataStore}>
        {/* <ProductsAndSuppliers /> */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-3">
              <StoreAccess store={dataStore} />
            </div>
            <div className="col">
              <Selector>
                <ProductDisplay
                  name="Products" />
                <SupplierDisplay
                  name="Suppliers" />
              </Selector>
              <Routering />
            </div>
          </div>
        </div>
      </Provider>

    )
  }
}