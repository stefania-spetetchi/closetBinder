import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState, setState } from "react";
import { getItems } from "../actions";
import NavBar from "./navBar";
import "./style.css";
import AddToOutfitButton from "./addToOutfitButton";

const Outfits = () => {
  const {items} = useSelector((state) => state.items);
  const dispatch = useDispatch();
  // const [outfitItems, setOutfitItems] = useState();
  const {outfitItems} = useSelector(state => state.outfitItems);
  console.log(outfitItems);

  useEffect(() => {
    dispatch(getItems());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getItems]);

  const handleRemove = (searchId) => {
    const newOutfit = outfitItems.filter((outfitItem) => outfitItem._id !== searchId);
    console.log(searchId);
    console.log(newOutfit);
  };

  return (
      <div>
      <NavBar />
      <div className="closet-section">
      <h6>This is your closet, click Add on items to create an outfit:</h6>
      <div className="closet-container main-layout">
      {items?.map((item) => (
        <div className="container-add">
          <img itemId={item._id} src={item.imageUrl} alt="" width="75" className="items"/>
          <div className="btn-add"><AddToOutfitButton itemId={item._id}>Add</AddToOutfitButton></div> 
        </div>   
      ))}
      </div>
      <h6>Your Outfit:</h6>
      <div className="temporary-outfit">
       {outfitItems?.map((nestedItem) => {
          return (
        <div className="container-outfit">
        <img key={nestedItem._id} remItemId={nestedItem._id} src={nestedItem?.imageUrl} alt="" width="75" className="items-in-outfit"/>
        <button className="btn-remove" onClick={() => handleRemove(nestedItem._id)}>Remove</button>
      </div>   
      )})}
      </div>
      </div>
      
      </div>
  )
};

export default Outfits;
