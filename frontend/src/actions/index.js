import axios from "axios";

export const GET_ITEMS = "GET_ITEMS";
export const ADD_ITEM_TO_OUTFIT = "ADD_ITEM_TO_OUTFIT";


export function getItems(data) {
  return axios.get("http://localhost:8000/items")
  .then(response => {
    return {
      type: GET_ITEMS,
      payload: response.data
    }
  })
  .catch(error => {
    alert("Error!!");
  })
};

export function getItemById(item) {
  console.log(item);

  return axios.get("http://localhost:8000/items/"+ item)
   .then(response => {
      return {
        type: ADD_ITEM_TO_OUTFIT,
        payload: response.data
      }
    })
    .catch(error => {
      alert("Error!!!!!!!!!");
    })
}