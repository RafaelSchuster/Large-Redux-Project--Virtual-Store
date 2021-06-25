import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import modelReducer from './ModelReducer';
import stateReducer from './StateReducer';
import { customReducerEnhancer } from '../Store/CustomReducerEnhancer'
import { multiActionMiddleware } from '../Store/MultiActionMiddleware'
import { asyncEnhancer } from './AsyncEnhancer';

const enhancedReducer = customReducerEnhancer(combineReducers({
    modelData: modelReducer,
    stateData: stateReducer
}))

export default createStore(enhancedReducer, compose(applyMiddleware(multiActionMiddleware), asyncEnhancer(2000)))

// export default createStore(combineReducers(
//     {
//         modelData: modelReducer,
//         stateData: stateReducer
//     }));

export { saveProduct, saveSupplier, deleteProduct, deleteSupplier } from './ModelActionCreators';