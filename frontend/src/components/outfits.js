import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import _ from 'lodash';
import {
  getItems,
  addItemToOutfit,
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
  const { outfitItems } = useSelector((state) => state.outfitItems);

  useEffect(() => {
    dispatch(getItems());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getItems]);

  const handleAdd = (searchId) => {
    const newItem = items.filter((item) => item._id === searchId);
    const outfitItemsCategories = outfitItems.map((a) => a.category);
    const outfitItemsIds = outfitItems.map((a) => a._id);
    if (
      newItem[0].category === 'Shoes' &&
      outfitItemsCategories.includes(newItem[0].category)
    ) {
      return console.log('alert1');
    }
    if (outfitItemsIds.includes(newItem[0]._id)) {
      return console.log('alert2');
    }
    dispatch(addItemToOutfit(newItem));
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

  function renderTempOutfit() {
    if (!_.isEmpty(outfitItems)) {
      return outfitItems.map((nestedItem) => (
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
            className="remove-item-from-outfit"
            onClick={() => handleRemove(nestedItem._id)}
          >
            Remove
          </button>
        </div>
      ));
    }
    return <p>Oops! this is empty! Start adding items from your closet</p>;
  }

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
                width="100"
                className="items"
              />
              <p className="category-label">{item.category}</p>
              <button
                type="submit"
                className="add-item-to-outfit"
                onClick={() => handleAdd(item._id)}
              >
                Add
              </button>
            </div>
          ))}
          <handleAdd />
        </div>

        <h6>Your Outfit:</h6>
        <div className="temporary-outfit">
          {renderTempOutfit()}
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
