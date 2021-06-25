import React from 'react'

// function multiActionMiddleware({ dispatch, getState }) {
//     return function receiveNext(next) {
//         return function processAction(action) {
//             if (Array.isArray(action)) {
//                 action.forEach(a => next(a))
//             }
//             else {
//                 next(action)
//             }
//         }
//     }


// }

export const multiActionMiddleware = ({ dispatch, getState }) => next => action => {
    if (Array.isArray(action)) {
        action.forEach(a => next(a))
    }
    else {
        next(action)
    }
}