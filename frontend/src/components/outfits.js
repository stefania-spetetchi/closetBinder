import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState, setState } from 'react';
import { getItems, getItemById, removeItemById } from '../actions';
import NavBar from './navBar';
import './style.css';

const Outfits = () => {
  const { items } = useSelector((state) => state.items);
  const dispatch = useDispatch();
  // const [outfitItems, setOutfitItems] = useState();
  const { outfitItems } = useSelector((state) => state.outfitItems);
  console.log(outfitItems);

  useEffect(() => {
    dispatch(getItems());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getItems]);

  const handleAdd = (searchId) => {
    const newItem = items.filter((item) => item._id === searchId);
    console.log(newItem);
    dispatch(getItemById(newItem));
  };

  const handleRemove = (searchId) => {
    // const removeItem = outfitItems.filter(
    //   (outfitItem) => outfitItem._id === searchId
    // );
    console.log(searchId);
    // console.log(removeItem);
    dispatch(removeItemById(searchId));
  };

  return (
    <div>
      <NavBar />
      <div className="closet-section">
        <h6>This is your closet, click Add on items to create an outfit:</h6>
        <div className="closet-container main-layout">
          {items?.map((item) => (
            <div className="container-add">
              <img
                key={item._id}
                // eslint-disable-next-line react/no-unknown-property
                itemId={item._id}
                src={item.imageUrl}
                alt=""
                width="75"
                className="items"
              />
              <button
                type="submit"
                className="btn-add"
                onClick={() => handleAdd(item._id)}
              >
                Add
              </button>
            </div>
          ))}
        </div>

        <h6>Your Outfit:</h6>
        <div className="temporary-outfit">
          {outfitItems.map((nestedItem) => (
            <div className="container-outfit">
              <img
                key={nestedItem._id}
                remItemId={nestedItem._id}
                src={nestedItem?.imageUrl}
                alt=""
                width="75"
                className="items-in-outfit"
              />
              <button
                type="submit"
                className="btn-remove"
                onClick={() => handleRemove(nestedItem._id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Outfits;
