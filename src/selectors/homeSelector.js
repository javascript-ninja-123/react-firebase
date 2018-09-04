import { createSelector } from 'reselect'

const itemSelector = ({home}) => home.items;


const LeftItems = (items) => {
  return items.reduce((acc,val) => {
    acc += val;
    return acc;
  },'')
}


export default createSelector(
  itemSelector,
  LeftItems
)
