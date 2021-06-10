import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getItems } from "../actions";
import NavBar from "./navBar";
import "./style.css";
import AddToOutfitButton from "./addToOutfitButton";

const Outfits = () => {
  const {items} = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const {item} = useSelector(state => state.item);

  useEffect(() => {
    dispatch(getItems());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getItems]);

  const outfitItems  = [];
  outfitItems.push(item);
  console.log(outfitItems);

  return (
      <div>
      <NavBar />
      <div className="closet-section">
      <h6>This is your closet, click Add on items to create an outfit:</h6>
      <div className="closet-container main-layout">
      {items?.map((item, id) => (
        <div className="container-add">
          <img itemId={item._id} src={item.imageUrl} alt="" width="75" className="items"/>
          <div className="btn-add"><AddToOutfitButton itemId={item._id}>Add</AddToOutfitButton></div> 
        </div>   
      ))}
      </div>
      <div className="temporary-outfit">
      <h6>Your Outfit:</h6>
      {outfitItems?.map((item) => (
        <div className="container-add">
        <img src={item?.imageUrl} alt="" width="75" className="items"/>
      </div>   
      ))}
      </div>
      </div>
      
      </div>
  )
};

export default Outfits;