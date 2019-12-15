export const ADD_ITEM = 'Add item';
export const FILTER_ITEM = 'Filter item';

export const AddItem = itemValue => ({
  type: ADD_ITEM,
  payload: { value: itemValue },
});

export const FilterItem = itemValue => {
  window.console.log(itemValue,"emre koc")
  return ({
  type: FILTER_ITEM,
  payload: { valueFilter: itemValue },
});}