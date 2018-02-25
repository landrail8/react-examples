
import React from 'react';
import dataSet from '../getData';
import SelectionColumns from './SelectionColumns';

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
