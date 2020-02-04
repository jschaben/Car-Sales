import React from 'react';

const Total = props => {
  return (
    <div className="content">
      <h4>{`Total Amount: $${props.car.features.reduce((acc, value) => {
          console.log(acc, value);
          return acc + value.price;
        }, props.car.price)}`}</h4>
    </div>
  );
};

export default Total;
