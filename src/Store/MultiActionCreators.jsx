import { PRODUCTS } from "./DataTypes"
import { saveProduct, saveSupplier } from "./ModelActionCreators"
import { endEditing } from "./StateActions"

export const saveAndEditing = (data, dataType) =>
    [dataType === PRODUCTS ? saveProduct(data) : saveSupplier(data), endEditing()]
