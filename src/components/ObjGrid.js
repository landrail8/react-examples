
import React from 'react';

const ObjGrid = (props) => {
  const {grid} = props;

  const gridElems = grid.arr.map(elem => <li>{elem.id} : {elem.name}</li>);

  return (
    <div>
      <h2>{grid.nameGrid}</h2>
      {gridElems}
      <h4>Creation date: {(new Date()).toDateString()}</h4>
    </div>
  )
}

export default ObjGrid;
