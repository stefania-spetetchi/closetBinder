import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Toast } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import _ from 'lodash';
import { getItems, addItemToOutfit } from '../actions';
import TempOutfitView from './tempOutfitView';
import NavBar from './navBar';
import OutfitsView from './outfitsView';
import './style.css';

const Outfits = () => {
  const { items } = useSelector((state) => state.items);
  const { error } = useSelector((state) => state.items);
  const dispatch = useDispatch();
  const { outfitItems } = useSelector((state) => state.outfitItems);

  const [showToast, setShowToast] = useState(false);

  const toggleShowA = () => setShowToast(!showToast);

  useEffect(() => {
    dispatch(getItems());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getItems]);

  const handleAdd = (searchId) => {
    const outfitItemsCategories = outfitItems?.map((a) => a?.category);
    const outfitItemsIds = outfitItems.map((a) => a._id);
    const newItem = items?.filter((item) => item?._id === searchId);
    if (
      newItem[0].category === 'Shoes' &&
      outfitItemsCategories.includes(newItem[0].category)
    ) {
      return setShowToast(true);
    }
    if (outfitItemsIds?.includes(newItem[0]._id)) {
      return setShowToast(true);
    }
    dispatch(addItemToOutfit(newItem));
  };

  function renderItems() {
    const sortedItems = items?.sort((a, b) =>
      a.category.localeCompare(b.category)
    );
    if (_.isEmpty(error) && !_.isEmpty(sortedItems)) {
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
    if (!_.isEmpty(error)) {
      return (
        <div className="float-container error col-md-8">
          <p>Sorry, something went wrong, please try again at a later time.</p>
        </div>
      );
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
        <Row>
          <Col xs={6}>
            <Toast show={showToast} onClose={toggleShowA}>
              <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded mr-2"
                  alt=""
                />
                <strong className="mr-auto">Tiny Alert</strong>
              </Toast.Header>
              <Toast.Body>
                You already have this exact or similar item in your outfit :)
              </Toast.Body>
            </Toast>
          </Col>
        </Row>
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
