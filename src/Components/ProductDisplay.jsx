import React, { Component } from "react";
import { ProductTable } from "./ProductTable"
import { ProductEditor } from "./ProductEditor";
import { connect } from 'react-redux'
// import { saveProduct, deleteProduct } from '../Store'
import { EditorConnector } from '../Store/EditorConnector';
import { PRODUCTS } from '../Store/DataTypes';
import { startCreatingProduct } from '../Store/StateActions';
import { TableConnector } from '../Store/TableConnector';

const ConnectedEditor = EditorConnector(PRODUCTS, ProductEditor)
const ConnectedTable = TableConnector(PRODUCTS, ProductTable)

const mapStateToProps = (storeData, ownProps) => ({
    editing: storeData.stateData.editing,
    selected: storeData.modelData.products
        .find(p => p.id === storeData.stateData.selectedId) || {}
})

// const mapDispatchToProps = {
//     createProduct: startCreatingProduct
// }

const mapDispatchToProps = (dispatch, ownProps) => { //mapDispatch as a function with access to the dispatch that dispatches actions to the reducer and has access tot he ownProps from the parent component
    return { createProduct: (...args) => dispatch(startCreatingProduct(...args)) }
}

// const mapStateToProps = (storeData, ownProps) => ({ //selector that selects data from dataStore and assigns to the prop to define the state
//     products: storeData.products //products: is a prop
// })

// const mapDispatchToProps = { //maps the function from the dataStore to the component's function props
//     saveCallback: saveProduct,
//     deleteCallback: deleteProduct
// }
const connectFunction = connect(mapStateToProps, mapDispatchToProps) //HOC that passes data props and function props to the component, the connect makes the HOC that is assigned to connectFunction

export const ProductDisplay = connectFunction(
    class extends Component {

        // constructor(props) {
        //     super(props);
        //     this.state = {
        //         showEditor: false,
        //         selectedProduct: null
        //     }
        // }

        // startEditing = (product) => {
        //     this.setState({ showEditor: true, selectedProduct: product })
        // }

        // createProduct = () => {
        //     this.setState({ showEditor: true, selectedProduct: {} })
        // }

        // cancelEditing = () => {
        //     this.setState({ showEditor: false, selectedProduct: null })
        // }

        // saveProduct = (product) => {
        //     this.props.saveCallback(product);
        //     this.setState({ showEditor: false, selectedProduct: null })        
        // }

        render() {
            if (this.props.editing) {
                return <ConnectedEditor key={this.props.selected.id || -1} />
                // return <ProductEditor 
                //     key={ this.state.selectedProduct.id || -1 }
                //     product={ this.state.selectedProduct } 
                //     saveCallback={ this.saveProduct }
                //     cancelCallback={ this.cancelEditing } />
            } else {
                return <div className="m-2">
                    <ConnectedTable />
                    {/* <ProductTable products={ this.props.products }
                        editCallback={ this.startEditing }
                        deleteCallback={ this.props.deleteCallback } />  */}
                    <div className="text-center">
                        <button className="btn btn-primary m-1"
                            onClick={this.props.createProduct}>
                            Create Product
                        </button>
                    </div>
                </div>
            }
        }
    })