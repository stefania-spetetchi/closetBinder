import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {getItemById} from "../actions";

// const handleClick = (searchId) => {
//   console.log(searchId);
// };

const AddToOutfitButton = (props) => {
const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(getItemById(props.itemId))}>Add</button>
  )
};

export default AddToOutfitButton;