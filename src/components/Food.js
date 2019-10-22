import React, { Fragment } from 'react';

const Food = (props) => {
    const { name, rating } = props;
    return (
      <Fragment>
        <h3>I love {name}~</h3>
        <span>rating : {rating}</span>
       </Fragment>
    );
  }

  
export default Food;