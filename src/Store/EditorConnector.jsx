import { connect } from 'react-redux';
import { endEditing } from './StateActions';
import { saveProduct, saveSupplier } from './ModelActionCreators';
import { PRODUCTS, SUPPLIERS } from './DataTypes';
import { saveAndEditing } from './MultiActionCreators';

export const EditorConnector = (dataType, presentationComponent) => {
    const mapStateToProps = (storeData, ownProps) => ({
        editing: storeData.stateData.editing && storeData.stateData.selectedType === dataType,
        product: storeData.modelData[PRODUCTS]
            .find(p => p.id === storeData.stateData.selectedId) || {},
        supplier: storeData.modelData[SUPPLIERS]
            .find(s => s.id === storeData.stateData.selectedId) || {}
    })

    // const mapDispatchToProps = dispatch => ({
    //     cancelCallback: () => dispatch(endEditing()),
    //     saveCallback: (data) => {
    //         dispatch((dataType === PRODUCTS ? saveProduct : saveSupplier)(data))
    //         dispatch(endEditing())
    //     }

    // })

    // const mapDispatchToProps = (dispatch, ownProps) => {

    const mapDispatchToProps = {
        cancelCallback: endEditing,
        saveCallback: (data) => saveAndEditing(data, dataType)
    }
    return connect(mapStateToProps, mapDispatchToProps)(presentationComponent)

}