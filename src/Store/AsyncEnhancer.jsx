
// export const asyncEnhancer = (car = 'ferrari') => {
//     return function (createStoreFunction) {
//         console.log(createStoreFunction);
//         return function (...args) {
//             const store = createStoreFunction(...args)
//             console.log(...args);
//             return {
//                 ...store, car: car
//             }
//         }
//     }

// }

export const asyncEnhancer = delay => createStoreFunction => (...args) => {
    const store = createStoreFunction(...args)
    console.log(createStoreFunction);
    console.log(...args);
    console.log(store.getState());
    return {
        ...store, dispatchAsync: (action) => new Promise((resolve, reject) => {
            setTimeout(() => {
                store.dispatch(action)
                resolve()
            }, delay)
        })
    }
}


