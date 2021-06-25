import { connect } from 'react-redux';
import { startEditingProduct, startEditingSupplier } from './StateActions';
import { deleteProduct, deleteSupplier } from './ModelActionCreators';
import { PRODUCTS, SUPPLIERS } from './DataTypes';

export const TableConnector = (dataType, presentationComponent) => { // On Web Services Chapter there's an update in the end with MergeProps and connecting the Data store with Web Services
    const mapStateToProps = (storeData, ownProps) => ({
        products: storeData.modelData[PRODUCTS],
        suppliers: storeData.modelData[SUPPLIERS]
    })
    // const mapDispatchToProps = (dispatch, ownProps) => {
    const mapDispatchToProps = {
        editCallback: dataType === PRODUCTS ? startEditingProduct : startEditingSupplier,
        deleteCallback: dataType === PRODUCTS ? deleteProduct : deleteSupplier
    }
    return connect(mapStateToProps, mapDispatchToProps)(presentationComponent)
}