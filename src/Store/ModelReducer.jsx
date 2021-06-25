import { STORE, UPDATE, DELETE } from './ModelActionTypes';
import { initialData } from './InitialData';

export default function (storeData, action) {
    switch (action.type) {
        case STORE:
            return {
                ...storeData,
                [action.dataType]: storeData[action.dataType].concat([action.payload]) //Storing a new product by returning an object that will be the new dataStore, that contains the dataStore and edits the specific object that corresponds to the datatype, so first you spread the datastore and adds what you're editing that is action.datatype property that you want to store and the value is whatever you have there already plus action.payload that is the data to add
            }
        case UPDATE:
            return {
                ...storeData,
                [action.dataType]: storeData[action.dataType].map(p =>
                    p.id === action.payload.id ? action.payload : p)
            }
        case DELETE:
            return {
                ...storeData,
                [action.dataType]: storeData[action.dataType].filter(p => p.id !== action.payload)
            }
        default:
            return storeData || initialData.modelData
    }
}