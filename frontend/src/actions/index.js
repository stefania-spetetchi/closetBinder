import axios from "axios";

export const GET_ITEMS = "GET_ITEMS";

export function getItems(data) {
  return axios.get("http://localhost:8000/items")
  .then(response => {
    return {
      type: GET_ITEMS,
      payload: response.data
    }
  })
  .catch(error => {
    alert("Error");
  })
};