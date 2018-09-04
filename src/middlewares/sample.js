




// export const customeMiddleware = store => next => action => {
//   if(action.type.includes("DATA")){
//     console.log('middleware is called')
//     next(action)
//     const items = JSON.stringify(store.getState().home.items)
//     window.localStorage.setItem('items',items)
//   }
//   else return next(action)
// }
