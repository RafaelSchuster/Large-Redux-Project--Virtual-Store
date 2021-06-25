import { PRODUCTS, SUPPLIERS } from './DataTypes';
import { STORE, UPDATE, DELETE } from './ModelActionTypes';

let idCounter = 100;

export const saveProduct = (product) => {
    return createSaveEvent(PRODUCTS, product)
}

export const saveSupplier = (suppliers) => {
    return createSaveEvent(SUPPLIERS, suppliers)
}

const createSaveEvent = (dataType, payload) => { // Action Creator
    if (!payload.id) {
        return { //Action
            type: STORE,
            dataType: dataType,
            payload: { ...payload, id: idCounter++ }
        }
    }
    else {
        return { //Action
            type: UPDATE,
            dataType: dataType,
            payload: payload
        }
    }
}

export const deleteProduct = (product) => ({
    type: DELETE,
    dataType: PRODUCTS,
    payload: product.id
})

export const deleteSupplier = (supplier) => ({
    type: DELETE,
    dataType: SUPPLIERS,
    payload: supplier.id
})







