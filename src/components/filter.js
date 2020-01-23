import React from "react";

class Filter extends React.Component{
  //function calling the toggle check function and pass it the argument the name from the props
  handleClick(){
    this.props.toggleChecked(this.props.rooms)
  }

  render() {
    return(
      <li key={this.props.title} className="checkbox-list">
        <input type="checkbox" checked={this.props.rooms} className="checkboxes-filters"/>
        {this.props.title}
      </li>
    )
  }
}

export default Filter
