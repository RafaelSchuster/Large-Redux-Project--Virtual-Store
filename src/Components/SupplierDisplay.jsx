import React, { Component } from "react";
import { SupplierEditor } from "./SupplierEditor";
import { SupplierTable } from "./SupplierTable";
import { connect } from 'react-redux'
import { startCreatingSupplier } from '../Store/StateActions';
import { SUPPLIERS } from '../Store/DataTypes';
import { EditorConnector } from '../Store/EditorConnector';
import { TableConnector } from '../Store/TableConnector';

const ConnectedEditor = EditorConnector(SUPPLIERS, SupplierEditor)
const ConnectedTable = TableConnector(SUPPLIERS, SupplierTable)

const mapStateToProps = (storeData, ownProps) => ({
    editing: storeData.stateData.editing,
    selected: storeData.modelData.suppliers.find(s => s.id === storeData.stateData.selectedId) || {}
})
// const mapDispatchToProps = (dispatch, ownProps) => {

const mapDispatchToProps = {

    createSupplier: startCreatingSupplier,
}

const connectFunction = connect(mapStateToProps, mapDispatchToProps) //the connect connects action creators to function props and storedata to data props, and connects with the dispatch method the actions to the reducers

export const SupplierDisplay = connectFunction(

    class extends Component {

        // constructor(props) {
        //     super(props);
        //     this.state = {
        //         showEditor: false,
        //         selected: null
        //     }
        // }

        // startEditing = (supplier) => {
        //     this.setState({ showEditor: true, selected: supplier })
        // }

        // createSupplier = () => {
        //     this.setState({ showEditor: true, selected: {} })
        // }

        // cancelEditing = () => {
        //     this.setState({ showEditor: false, selected: null })
        // }

        // saveSupplier = (supplier) => {
        //     this.props.saveCallback(supplier);
        //     this.setState({ showEditor: false, selected: null })
        // }

        render() {
            if (this.props.editing) {
                return <ConnectedEditor key={this.props.selected.id || -1} />
                // return <SupplierEditor
                //     key={this.state.selected.id || -1}
                //     supplier={this.state.selected}
                //     saveCallback={this.saveSupplier}
                //     cancelCallback={this.cancelEditing} />
            } else {
                return <div className="m-2">
                    {/* <SupplierTable suppliers={this.props.suppliers}
                        editCallback={this.startEditing}
                        deleteCallback={this.props.deleteCallback}
                    /> */}
                    <ConnectedTable />
                    <div className="text-center">
                        <button className="btn btn-primary m-1"
                            onClick={this.props.createSupplier}>
                            Create Supplier
                        </button>
                    </div>
                </div>
            }
        }
    }
)