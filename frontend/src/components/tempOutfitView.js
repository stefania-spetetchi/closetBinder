import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import _ from 'lodash';
import { removeItemById, createOutfit, startOver } from '../actions';
import './style.css';

const TempOutfitView = () => {
  const { outfitItems } = useSelector((state) => state.outfitItems);
  const dispatch = useDispatch();

  const [tempOutfitCategory, setTempOutfitCategory] = useState({
    outfitCategory: '',
  });

  const tempOutfit = {
    items: outfitItems,
    outfitCategory: tempOutfitCategory,
  };

  const handleOutfitChange = (category) => (e) => {
    const value = category === 'image' ? e.target.files[0] : e.target.value;
    setTempOutfitCategory({ ...tempOutfitCategory, [category]: value });
  };

  const handleRemove = (searchId) => {
    dispatch(removeItemById(searchId));
  };

  const handleCreate = () => {
    dispatch(createOutfit(tempOutfit));
  };

  const handleStartOver = () => {
    dispatch(startOver(outfitItems));
  };

  function renderTempOutfit() {
    const sortedOutfitItems = outfitItems.sort((a, b) =>
      a.category.localeCompare(b.category)
    );
    if (!_.isEmpty(outfitItems)) {
      return (
        <div className="temporary-outfit">
          {sortedOutfitItems.map((nestedItem) => (
            <div>
              <div className="container-outfit">
                <img
                  key={nestedItem._id}
                  src={nestedItem?.imageUrl}
                  alt=""
                  width="100"
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
            </div>
          ))}
          <div className="create-and-startOver">
            <div className="mb-4">
              <select
                className="outfit form-control"
                placeholder="Enter category"
                type="text"
                category="outfitCategory"
                value={tempOutfitCategory.outfitCategory}
                onChange={handleOutfitChange('outfitCategory')}
              >
                <option value="">Choose a category</option>
                <option value="Vacation">Vacation</option>
                <option value="Casual">Casual</option>
                <option value="Business">Business</option>
                <option value="Evening">Evening</option>
              </select>
            </div>
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
        </div>
      );
    }
    return (
      <p className="error">
        Oops! this is empty! Start by adding items from your closet.
      </p>
    );
  }
  return (
    <div>
      <div>{renderTempOutfit()}</div>
    </div>
  );
};

export default TempOutfitView;
