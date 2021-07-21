import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import _ from 'lodash';
import { useEffect, useState } from 'react';
import { getOutfits, deleteOutfit } from '../actions';
import NavBar from './navBar';
import './style.css';

const OutfitsView = () => {
  const { outfits } = useSelector((state) => state.outfits);
  const { error } = useSelector((state) => state.outfits);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOutfits());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getOutfits]);

  const handleOutfitDelete = (outfitId) => {
    dispatch(deleteOutfit(outfitId));
  };

  const handleOutfitEdit = (outfitId) => {
    // dispatch(editOutfit(outfitId));
    console.log(`clicked on ID: ${outfitId}`);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
                      // onClick={() => handleOutfitEdit(outfit._id)}
                      onClick={handleShow}
                    >
                      Edit
                    </button>
                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header>
                        <Modal.Title>Edit outfit</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Form noValidate>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicName"
                          >
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                              type="name"
                              placeholder="Enter a name for your outfit"
                            />
                          </Form.Group>

                          <Form.Group
                            className="mb-3"
                            controlId="formBasicDescription"
                          >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                              type="description"
                              placeholder="Description"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicValue"
                          >
                            <Form.Label>Value ($)</Form.Label>
                            <Form.Control
                              type="value"
                              placeholder="What is this outfit worth?"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicDate"
                          >
                            <Form.Label>Date to Wear</Form.Label>
                            <Form.Control
                              type="date"
                              placeholder="When will you wear this outfit?"
                            />
                            <Form.Switch
                              type="switch"
                              id="custom-switch"
                              label="Rain safe"
                            />
                          </Form.Group>
                        </Form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                          Save Changes
                        </Button>
                      </Modal.Footer>
                    </Modal>
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
        {/* <ModalToggle /> */}
      </div>
    </div>
  );
};

export default OutfitsView;
