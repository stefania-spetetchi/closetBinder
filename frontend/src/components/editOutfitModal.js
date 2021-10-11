/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import moment from 'moment';
import { useState } from 'react';
import { editOutfit, getOutfits } from '../actions';
import './style.css';

const EditOutfit = (props) => {
  console.log(props);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    _id: '',
    name: '',
    description: '',
    price: '',
    dateToWear: '',
  });

  const handleClose = () => {
    props.setShow(false);
  };

  const handleOnShow = () => {
    setData(props.outfit);
  };

  const handleOutfitEdit = (outfitId) => {
    dispatch(editOutfit(outfitId, data));
    console.log(`clicked on ID: ${outfitId}`);
    props.setShow(false);
  };

  const handleChange = (name) => (e) => {
    const value = name === '' ? e.target.files[0] : e.target.value;
    setData({ ...data, [name]: value });
  };

  function renderEditOutfitModal() {
    return (
      <div>
        <Modal show={props.show} onHide={handleClose} onShow={handleOnShow}>
          <Modal.Header>
            <Modal.Title>Edit outfit</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form noValidate>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Enter a name for your outfit"
                  value={data.name}
                  onChange={handleChange('name')}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="description"
                  placeholder="Description"
                  value={data.description}
                  onChange={handleChange('description')}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicValue">
                <Form.Label>Price ($)</Form.Label>
                <Form.Control
                  type="value"
                  placeholder="What is this outfit worth?"
                  value={data.price}
                  onChange={handleChange('price')}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicDate">
                <Form.Label>Date to Wear</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="When will you wear this outfit?"
                  value={moment(data.dateToWear).format('YYYY-MM-DD')}
                  onChange={handleChange('dateToWear')}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => handleOutfitEdit(props.outfit._id)}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
  return (
    <div>
      <div className="modal-section">{renderEditOutfitModal()}</div>
    </div>
  );
};

export default EditOutfit;
