import React from 'react';

class SelectionColumns extends React.Component {
  constructor(props) {
    super(props);
    this.handleCheckBox = this.handleCheckBox.bind(this);
    this.state = {
      CheckBoxGroup: {
        id: true,
        name: true,
        GDP: false
      }
    }
  }

  handleCheckBox(event) {
    let object = {};
    object[event.target.value] = event.target.checked;
    this.setState({CheckBoxGroup: object});
  }

  render() {
    return (
      <form>
        <input
          type = "checkbox"
          value = "id"
          checked = {this.state.CheckBoxGroup.id}
          onChange = {this.handleCheckBox}
        />
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
