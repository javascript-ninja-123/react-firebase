import {
  ADD_DATA,
  DELETE_DATA
} from '../actions/type';

const INITIAL_STATE ={
  items:    window.localStorage.getItem('items') ? JSON.parse(window.localStorage.getItem('items')) : [],
  deletedItems:[],
  text:''
}


const compoundReducer = (state,{type,payload}) => {
  switch(type){
    case ADD_DATA:
    return {...state, items:[...state.items, ...payload]}
    case DELETE_DATA:
    const text = payload[0] ? payload[0] : ''
    const newItems = state.items.filter(value => value !== text)
    return {...state, deletedItems:[...state.deletedItems, text], items:newItems, text}
    default:
    return state;
  }
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case ADD_DATA:
    return compoundReducer(state,action);
    case DELETE_DATA:
    return compoundReducer(state,action);
    default:
    return state;
  }
}
