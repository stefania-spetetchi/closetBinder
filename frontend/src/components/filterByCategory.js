/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import Select from 'react-select';
import './style.css';

const categoriesOfProducts = [
  { label: '---All---', value: '' },
  { label: 'Accessories', value: 'Accessories' },
  { label: 'Dresses', value: 'Dresses' },
  { label: 'Tops', value: 'Tops' },
  { label: 'Pants', value: 'Pants' },
  { label: 'Skirts', value: 'Skirts' },
  { label: 'Shorts', value: 'Shorts' },
  { label: 'Shoes', value: 'Shoes' },
  { label: 'Jackets', value: 'Jackets' },
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected ? '#F0EFEA' : '#A10115',
    padding: 5,
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: 200,
  }),
  base: () => ({
    borderBottom: '#D72C16',
  }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  },
};
const FilterQuery = (props) => (
  <div className="filterQuery col-sm-3">
    <Select
      components={{
        DropdownIndicator: () => null,
        IndicatorSeparator: () => null,
      }}
      styles={customStyles}
      options={categoriesOfProducts}
      categoryQuery={props.query}
      onChange={(opt) => {
        props.setQuery(opt.value);
      }}
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          text: 'orangered',
          primary25: '#F0EFEA',
          primary: '#A10115',
          color: '#A10115',
        },
      })}
    />
  </div>
);

export default FilterQuery;
