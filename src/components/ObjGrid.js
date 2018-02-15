
import React from 'react';

const ObjGrid = (props) => {
  const {grid} = props;

  const gridElems = grid.arr.map(elem => <li>{elem.id} : {elem.name}</li>);

  return (
    <div>
      <h1>{grid.nameGrid}</h1>
      {gridElems}
      <h3>Creation date: {(new Date()).toDateString()}</h3>
    </div>
  )
}

export default ObjGrid;
