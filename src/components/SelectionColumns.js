import React from 'react';

const getColumns = (arr) => Object.keys(arr[0]);

const TableRow = ({row, columnsObj}) => (
  <tr>
    {Object.keys(columnsObj).filter(curr => columnsObj[curr]).map((curr) => {
      return (
        <td key={ row[curr] }>{ row[curr] }</td>
      )
    })}
  </tr>
)

class SelectionColumns extends React.Component {
  constructor(props) {
    super(props);
    this.handleCheckBox = this.handleCheckBox.bind(this);

    const {grid} = props;

    this.CheckBoxElems = getColumns(grid.arr);

    const objCheckBoxGroup = getColumns(grid.arr).reduce((acc, curr) => {
      acc[curr] = true;
      return acc;
    }, {});

    this.state = {
      CheckBoxGroup: objCheckBoxGroup
    }
  }

  handleCheckBox(event) {
    let object = Object.assign(this.state.CheckBoxGroup);
    object[event.target.value] = event.target.checked;
    this.setState(
      { CheckBoxGroup: object }
    );
  }

  render() {
    return (
      <div>
        <form>
          {this.CheckBoxElems.map(
            el=>(
              <label key={el}>
                {el}
                <input
                  type = "checkbox"
                  value = {el}
                  checked = {this.state.CheckBoxGroup[el]}
                  onChange = {this.handleCheckBox}
                  />
              </label>)
            )
          }
        </form>

        <table>
          <tbody>
            {this.props.grid.arr.map(row => <TableRow key={row.id} row={row} columnsObj={this.state.CheckBoxGroup} />)}
          </tbody>
        </table>

        <h4>Creation date: {(new Date()).toDateString()}</h4>
      </div>
    )
  }
}

export default SelectionColumns;
