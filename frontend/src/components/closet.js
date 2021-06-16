import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getItems } from '../actions';
import NavBar from './navBar';
import Items from './items';
import AddItem from './addItem';
import './style.css';

const ClosetItems = () => {
  const { items } = useSelector((state) => state.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getItems]);

  return (
    <div>
      <NavBar />
      <h5 className="heading-subpage display-5">Your Closet</h5>
      <AddItem />
      <div className="closet-container main-layout" key="_id">
        <Items items={items} />
      </div>
    </div>
  );
};

export default ClosetItems;
