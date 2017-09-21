import React, { Component }  from 'react';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = (props) => {
  return (
    <div className="fruit-basket">
      <FilteredFruitList
        fruits={props.fruits}
      />
    </div>
  );
}

FruitBasket.defaultProps = {
  fruits: []
}

export default FruitBasket;
