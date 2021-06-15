/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import _ from 'lodash';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../actions';
import './style.css';

const Items = (props) => {
  const dispatch = useDispatch();

  const handleRemoveItem = (itemId) => {
    dispatch(deleteItem(itemId));
  };

  if (!_.isEmpty(props.items)) {
    return props.items.map((item) => (
      <div>
        <div className="closet-layout col-md-3">
          <div className="items">
            <img
              key="item._id"
              className="closet-item"
              src={item.imageUrl}
              alt="new"
              height="150"
            />
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={() => handleRemoveItem(item._id)}
            />
          </div>
        </div>
      </div>
    ));
  }
  return <div>Nothing here</div>;
};

export default Items;
