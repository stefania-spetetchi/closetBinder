import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getOutfits, deleteOutfit } from '../actions';
import './style.css';

const OutfitsView = () => {
  const { outfits } = useSelector((state) => state.outfits);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOutfits());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getOutfits]);

  const handleOutfitDelete = (outfitId) => {
    dispatch(deleteOutfit(outfitId));
  };

  return (
    <div>
      <div className="closet-section">
        <h6>Your Outfits:</h6>
        <div className="outfits-container main-layout">
          {outfits?.map(function (outfit) {
            return (
              <div className="outfit" key={outfit._id}>
                {outfit.items.map(function (item) {
                  return (
                    <div>
                      <img
                        // eslint-disable-next-line react/no-unknown-property
                        src={item.imageUrl}
                        alt=""
                        width="75"
                        className="items"
                      />
                    </div>
                  );
                })}
                <button
                  className="delete-outfit"
                  type="submit"
                  onClick={() => handleOutfitDelete(outfit._id)}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OutfitsView;
