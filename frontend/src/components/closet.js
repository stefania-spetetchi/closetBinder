import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getItems } from '../actions';
import NavBar from './navBar';
import Items from './items';
import AddItem from './addItem';
import FilterQuery from './filterByCategory';
import './style.css';

const ClosetItems = () => {
  const { items } = useSelector((state) => state.items);
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems(query));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getItems, query]);

  return (
    <div>
      <NavBar />
      <h5 className="heading-subpage display-5">Your Closet</h5>
      <AddItem />
      <FilterQuery query={query} setQuery={setQuery} className="col-md-4" />
      <div className="closet-container main-layout" key="_id">
        <Items items={items} />
      </div>
    </div>
  );
};

export default ClosetItems;
