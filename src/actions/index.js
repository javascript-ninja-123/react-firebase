import {
  ADD_DATA,
  DELETE_DATA,
  FETCH_DATA,
  FETCH_DATA_FUFILLED,
  FETCH_DATA_ERROR,
  CHANGE_PAGE
} from './type';
export * from './home';
export * from './type';
export * from './router';
export * from './profile';

export const addData = itemArray => (
  {
      type:ADD_DATA,
      payload:itemArray
  }
)

export const deleteText = itemArray => (
  {
    type:DELETE_DATA,
    payload:itemArray
  }
)

export const fetchData = (obj) => (
  {
    type:FETCH_DATA,
    payload:obj
  }
)


export const fetchDataFufilled = payload => {
return  {
    type:FETCH_DATA_FUFILLED,
    payload
  }
}

export const fetchDataFailed = err => (
  {
    type:FETCH_DATA_ERROR,
    payload:err
  }
)

export const changePage = page => (
{
  type:CHANGE_PAGE,
  payload:page
})
