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

const getColumns = (arr) => Object.keys(arr[0]);

class SelectionColumns extends React.Component {
  constructor(props) {
    super(props);
    this.handleCheckBox = this.handleCheckBox.bind(this);

    const {grid} = props;

    const objCheckBoxGroup = getColumns(grid).reduce((acc, curr) => {
      acc[curr] = true;
      return acc;
    }, {});

    this.state = {
      CheckBoxGroup: objCheckBoxGroup

      /*{

        id: true,
        name: true,
        GDP: false
      }*/
    }
  }

  handleCheckBox(event) {
    let object = Object.assign(this.state.CheckBoxGroup);
    object[event.target.value] = event.target.checked;
    this.setState({CheckBoxGroup: object});
  }

  render() {
    return (
      <form>


        <label>
          <input
            type = "checkbox"
            value = "id"
            checked = {this.state.CheckBoxGroup.id}
            onChange = {this.handleCheckBox}
          />
        </label>


        <input
          type = "checkbox"
          value = "name"
          checked = {this.state.CheckBoxGroup.name}
          onChange = {this.handleCheckBox}
        />
        <input
          type = "checkbox"
          value = "GDP"
          checked = {this.state.CheckBoxGroup.GDP}
          onChange = {this.handleCheckBox}
        />
      </form>
    )
  }
}

export default SelectionColumns;
