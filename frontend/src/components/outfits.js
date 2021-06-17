import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import _ from 'lodash';
import { getItems, addItemToOutfit } from '../actions';
import TempOutfitView from './tempOutfitView';
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
      // return (
      //   <div className="alert alert-danger" role="alert">
      //     This is a danger alert—check it out!
      //   </div>
      // );
    }
    if (outfitItemsIds?.includes(newItem[0]._id)) {
      return console.log('alert2');
    }
    dispatch(addItemToOutfit(newItem));
  };

  function renderItems() {
    const sortedItems = items?.sort((a, b) =>
      a.category.localeCompare(b.category)
    );
    if (!_.isEmpty(sortedItems)) {
      return sortedItems?.map((item) => (
        <div className="container-add">
          <img
            key={item._id}
            // eslint-disable-next-line react/no-unknown-property
            src={item.imageUrl}
            alt=""
            width="100"
            className="items"
          />
          <p className="category-label">{item.category}</p>
          <button
            type="button"
            aria-label="Add"
            className="add-item-to-outfit"
            onClick={() => {
              handleAdd(item?._id);
            }}
          >
            Add
          </button>
        </div>
      ));
    }
    return <p>Oops! Your closet is empty!</p>;
  }

  return (
    <div>
      <NavBar />
      <h5 className="heading-subpage display-5">Your Outfits Page</h5>
      <div className="closet-section">
        <div className="outfits-container outfits-layout">{renderItems()}</div>
        <br />
        <h6>Your Outfit:</h6>
        <div>
          <TempOutfitView />
        </div>
        <br />
        <div>
          <OutfitsView />
        </div>
      </div>
    </div>
  );
};

export default Outfits;
