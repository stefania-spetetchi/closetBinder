import axios from 'axios';

export const GET_ITEMS = 'GET_ITEMS';
export const ADD_ITEM_TO_OUTFIT = 'ADD_ITEM_TO_OUTFIT';
export const REMOVE_ITEM_TO_OUTFIT = 'REMOVE_ITEM_TO_OUTFIT';

export function getItems() {
  return axios
    .get('http://localhost:8000/items')
    .then((response) => ({
      type: GET_ITEMS,
      payload: response.data,
    }))
    .catch((error) => {
      alert('Error!!');
    });
}

export function getItemById(newItem) {
  console.log('newItem: ', newItem);
  return {
    type: ADD_ITEM_TO_OUTFIT,
    payload: newItem[0],
  };
}

export function removeItemById(searchId) {
  console.log(searchId);
  return {
    type: REMOVE_ITEM_TO_OUTFIT,
    payload: searchId,
  };
}
