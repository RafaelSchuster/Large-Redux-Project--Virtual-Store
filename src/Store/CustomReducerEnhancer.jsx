import React from 'react'
import { initialData } from './InitialData';


export const STORE_RESET = 'store_clear'

export const resetStore = () => ({ type: STORE_RESET })

export function customReducerEnhancer(originalReducer) {

    let initialState = null; //this is before the reducer and doesn't mean that the returned initial state is null, it just clears up the initial state before the new soon to be returned reducer be returned

    return (storeData, action) => { //initial state of the data store is passed to the reducer
        if (action.type === STORE_RESET && initialData != null) {
            return initialState // initial populated state of the data store is returned, both model data and state data
        }
        else {
            const result = originalReducer(storeData, action)
            if (initialState == null) {
                initialState = result //initial state becomes the modified data returned by the original reducer and is returned, even if the initial state isn't returned, the assigning of initial state =return affects the application setting up initial data to be equal to the new data
            }
            return result //result of the original reducer without being enhanced
        }
    }

}

export default customReducerEnhancer
