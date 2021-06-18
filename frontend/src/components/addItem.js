import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getItems } from '../actions';

const AddItem = () => {
  const history = useHistory();
  const [data, setData] = useState({
    category: '',
    image: '',
    imageUrl: '',
  });

  const dispatch = useDispatch();

  const handleChange = (category) => (e) => {
    const value = category === 'image' ? e.target.files[0] : e.target.value;
    setData({ ...data, [category]: value });
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('image', data.image);
      formData.append('category', data.category);

      const response = await fetch('http://localhost:8000/items', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        setData({ category: '', image: '', imageUrl: '' });
        history.replace('/closet');
        dispatch(getItems());
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="col-md-6 offset-md-3 upload-form">
      <h5>Add more items to your closet:</h5>
      <div className="mb-3">
        <select
          className="form-control"
          placeholder="Enter category"
          type="text"
          category="category"
          value={data.category}
          onChange={handleChange('category')}
        >
          <option value="">--Please choose a category--</option>
          <option value="Dresses">Dresses</option>
          <option value="Tops">Tops</option>
          <option value="Pants">Pants</option>
          <option value="Skirts">Skirts</option>
          <option value="Shorts">Shorts</option>
          <option value="Jackets">Jackets</option>
          <option value="Shoes">Shoes</option>
          <option value="Accessories">Accessories</option>
        </select>
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="file"
          accept="image/*"
          name="image"
          onChange={handleChange('image')}
        />
      </div>
      <div className="text-center">
        <button
          className="uploadItem btn-primary"
          onClick={handleSubmit}
          type="submit"
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default AddItem;
