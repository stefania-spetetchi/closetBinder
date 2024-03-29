import axios from 'axios';
import _ from 'lodash';

export const GET_ITEMS = 'GET_ITEMS';
export const GET_ITEMS_ERROR = 'GET_ITEMS_ERROR';
export const ADD_ITEM_TO_OUTFIT = 'ADD_ITEM_TO_OUTFIT';
export const REMOVE_ITEM_TO_OUTFIT = 'REMOVE_ITEM_TO_OUTFIT';
export const GET_OUTFITS = 'GET_OUTFITS';
export const GET_OUTFITS_ERROR = 'GET_OUTFITS_ERROR';
export const POST_OUTFIT = 'POST_OUTFIT';
export const PUT_OUTFIT = 'PUT_OUTFIT';
export const REMOVE_ALL_ITEMS_FROM_OUTFIT = 'REMOVE_ALL_ITEMS_FROM_OUTFIT';

export function getItems(categoryQuery) {
  const inputs = {};

  if (categoryQuery) inputs.category = categoryQuery;
  if (!_.isEmpty(inputs)) {
    return axios
      .get(`http://localhost:8000/items?category=${categoryQuery}`)
      .then((response) => ({
        type: GET_ITEMS,
        payload: response.data,
      }))
      .catch((error) => ({
        type: GET_ITEMS_ERROR,
        payload: error,
      }));
  }
  return axios
    .get(`http://localhost:8000/items`)
    .then((response) => ({
      type: GET_ITEMS,
      payload: response.data,
    }))
    .catch((error) => ({
      type: GET_ITEMS_ERROR,
      payload: error,
    }));
}

export function addItemToOutfit(newItem) {
  return {
    type: ADD_ITEM_TO_OUTFIT,
    payload: newItem[0],
  };
}

export function removeItemById(searchId) {
  return {
    type: REMOVE_ITEM_TO_OUTFIT,
    payload: searchId,
  };
}

export function getOutfits() {
  return axios
    .get('http://localhost:8000/outfits')
    .then((response) => ({
      type: GET_OUTFITS,
      payload: response.data,
    }))
    .catch((error) => ({
      type: GET_OUTFITS_ERROR,
      payload: error,
    }));
}

export function createOutfit(tempOutfit) {
  return axios
    .post('http://localhost:8000/outfits', tempOutfit)
    .then((response) => ({
      type: POST_OUTFIT,
      payload: response,
    }))
    .then(() => getOutfits())
    .catch((error) => {
      alert('Error');
    });
}

export function startOver(outfitItems) {
  return {
    type: REMOVE_ALL_ITEMS_FROM_OUTFIT,
    payload: outfitItems,
  };
}

export function deleteOutfit(outfitId) {
  return axios
    .delete(`http://localhost:8000/outfits/${outfitId}`)
    .then(() => getOutfits())
    .catch((error) => {
      alert('Error!!!');
    });
}

export function editOutfit(outfitId, data) {
  return axios
    .put(`http://localhost:8000/outfits/${outfitId}`, data)
    .catch((error) => {
      alert('Error');
    });
}

export function deleteItem(itemId) {
  return axios
    .delete(`http://localhost:8000/items/${itemId}`)
    .then(() => getItems())
    .catch((error) => {
      alert('Item is not deleted');
    });
}
