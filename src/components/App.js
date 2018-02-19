
import React from 'react';
import dataSet from '../getData';
import ObjGrid from './ObjGrid';
import SelectionColumns from './SelectionColumns';
//import SortableTable from './SortableTable';

class App extends React.Component {
  render() {
    return (
      <div>
        <SelectionColumns grid = {dataSet()} /> 
      </div>
    )
  }
}
export default App;
