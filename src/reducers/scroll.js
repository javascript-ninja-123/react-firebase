import {
  FETCH_DATA,
  FETCH_DATA_FUFILLED,
  FETCH_DATA_ERROR,
  CHANGE_PAGE
} from '../actions/type';

const INITIAL_STATE = {
  page:1,
  totalPages: null,
  scrolling: false,
  per:5,
  contacts:[],
  loading:false,
  error:null
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
      case CHANGE_PAGE:
      return {...state, page:action.payload, scrolling:true}
      case FETCH_DATA:
      return {...state, loading:true};
      case FETCH_DATA_FUFILLED:
      return {...state, loading:false, contacts:[...state.contacts,...action.payload.contacts], totalPages:action.payload.total_pages, scrolling:false}
      case FETCH_DATA_ERROR:
      return {...state, loading:false, error:action.payload}
      default:
      return state;
    }
}
