import React, { Component } from 'react';

const FilteredFruitList = (props) => {
  return (
    <ul className="fruit-list">
      {props.fruits.map((item, index) => <li key={index}>{item.char}</li>)}
    </ul>
  );
}

FilteredFruitList.defaultProps = {
  fruits: []
}

export default FilteredFruitList;
