import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  getItems,
  getItemById,
  removeItemById,
  createOutfit,
  startOver,
} from '../actions';
import NavBar from './navBar';
import OutfitsView from './outfitsView';
import './style.css';

const Outfits = () => {
  const { items } = useSelector((state) => state.items);
  const dispatch = useDispatch();
  const [isActive, setActive] = useState(false);
  const { outfitItems } = useSelector((state) => state.outfitItems);

  useEffect(() => {
    dispatch(getItems());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getItems]);

  const handleAdd = (searchId) => {
    const newItem = items.filter((item) => item._id === searchId);
    setActive(!isActive);
    dispatch(getItemById(newItem));
  };

  const handleRemove = (searchId) => {
    dispatch(removeItemById(searchId));
  };

  const handleCreate = () => {
    dispatch(createOutfit(outfitItems));
  };

  const handleStartOver = () => {
    dispatch(startOver(outfitItems));
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
          <button
            onClick={() => handleCreate()}
            className="create-outfit"
            type="submit"
          >
            Create Outfit
          </button>
          <button
            onClick={() => handleStartOver()}
            className="start-over"
            type="submit"
          >
            Start Over
          </button>
        </div>
        <div>
          <OutfitsView />
        </div>
      </div>
    </div>
  );
};

export default Outfits;
