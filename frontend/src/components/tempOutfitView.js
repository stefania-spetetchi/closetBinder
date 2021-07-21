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
    alert('your outfit was successfully created');
    dispatch(startOver(outfitItems));
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
                  className="btn btn-danger btn-sm"
                  onClick={() => handleRemove(nestedItem._id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="mx-1 create-and-startOver">
            <div className="dropdown mt-1 mb-1">
              <select
                className="form-control"
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
              className="btn btn-primary"
              type="submit"
            >
              Create Outfit
            </button>
            <button
              onClick={() => handleStartOver()}
              className="btn btn-primary mx-2"
              type="submit"
            >
              Start Over
            </button>
          </div>
        </div>
      );
    }
    return (
      <p className="error">Empty! Start by adding items from your closet.</p>
    );
  }
  return (
    <div>
      <div>{renderTempOutfit()}</div>
    </div>
  );
};

export default TempOutfitView;
