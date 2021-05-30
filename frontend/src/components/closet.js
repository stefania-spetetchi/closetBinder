import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getItems } from "../actions";
import NavBar from "./navBar";
import Items from "./items";

const ClosetItems = () => {
  const {items} = useSelector((state) => state.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [getItems]);



  return (
    <div>
       <NavBar />
      <Items items={items} />
    </div>
  )
}


export default ClosetItems;