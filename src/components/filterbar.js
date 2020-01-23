//import libraries
import React from "react";

//import components
import Filter from "../components/filter.js"


class FilterBar extends React.Component {

  render(){
    return(
      <React.Fragment>
        <div className="filter flex-row">
          <div className="flex-column">
            <h1> Find your home</h1>
          </div>
          <div>
            <h3>Room type</h3>
            <Filter />
            
          </div>
        </div>
      </React.Fragment>
    )
  }
}


export default FilterBar