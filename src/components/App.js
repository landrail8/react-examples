
import React from 'react';
import ObjGrid from './ObjGrid';
import dataSet from '../getData';

const App = () => {
  return (
    <div>
      <ObjGrid grid = {dataSet()} />
    </div>
  )
}
export default App;
