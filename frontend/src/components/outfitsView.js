import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import { useEffect, useState } from 'react';
import { getOutfits, deleteOutfit } from '../actions';
import NavBar from './navBar';
import EditOutfit from './editOutfitModal';
import Calendar from './calendar';
import './style.css';

const OutfitsView = () => {
  const { outfits } = useSelector((state) => state.outfits);
  console.log(outfits);
  const { error } = useSelector((state) => state.outfits);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOutfits());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getOutfits]);

  const [show, setShow] = useState(false);
  const [selectedOutfit, setSelectedOutfit] = useState('');
  const showModal = (outfitId) => {
    // console.log('clicked on ', outfitId);
    const chosenOutfit = outfits.filter(function (outfit) {
      return outfit._id === outfitId;
    });
    setSelectedOutfit(chosenOutfit[0]);
    setShow(true);
  };

  const handleOutfitDelete = (outfitId) => {
    dispatch(deleteOutfit(outfitId));
  };

  const dates = outfits.map(function (outfit) {
    return outfit.dateToWear;
  });

  // eslint-disable-next-line prefer-spread
  const allDates = [].concat.apply([], dates);
  const uniqueDates = new Set(allDates);
  const uniqueDatesArray = [...uniqueDates];
  console.log(uniqueDatesArray);

  function renderOutfitsView() {
    if (_.isEmpty(error)) {
      return (
        <div>
          <div className="closet-section">
            <h6>Your Outfits:</h6>
            <div className="outfits-container main-layout">
              {outfits?.map(function (outfit) {
                return (
                  <div className="outfit" key={outfit._id}>
                    <p className="outfit-category-label">
                      {outfit.outfitCategory}
                    </p>
                    {outfit.items.map(function (item) {
                      return (
                        <div className="float-start" key={item._id}>
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
                    <div>
                      <p>Name: {outfit.name}</p>
                      <p>Description: {outfit.description}</p>
                      <p>Price: ${outfit.price}</p>
                      <p>
                        Date to wear:{' '}
                        {outfit.dateToWear.map(function (date) {
                          return <p>{date}</p>;
                        })}
                      </p>
                    </div>
                    <button
                      className="btn btn-danger btn-sm align-content-center"
                      type="submit"
                      onClick={() => handleOutfitDelete(outfit._id)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-secondary btn-sm align-content-center"
                      type="submit"
                      onClick={() => showModal(outfit._id)}
                    >
                      Edit
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="float-container error col-md-8">
        <p>Sorry, something went wrong, please try again at a later time.</p>
      </div>
    );
  }
  return (
    <div>
      <NavBar />
      <div className="closet-section">
        {renderOutfitsView()}
        <EditOutfit show={show} setShow={setShow} outfit={selectedOutfit} />
        <Calendar dates={uniqueDatesArray} />
      </div>
    </div>
  );
};

export default OutfitsView;
