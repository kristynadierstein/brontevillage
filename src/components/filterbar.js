//import libraries
import React from "react";

//import components
import Filter from "../components/filter.js"


class FilterBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      checked: false,
      suites: this.props.suites 
    }    
  }


  render(){
    let rooms = [];

    const { suites } = this.props;
    const { } = this.state;

    this.props.suites.map((record) => {
      rooms.push(record.fields.rooms)
    })

    const distinctBedrooms = [...new Set(rooms)];
 
 
    return(
      <React.Fragment>
        <div className="filter flex-row">
          
          
          <div className="flex-column">
            <h1> Find your home </h1>
          </div>
          
          {/* Bedroom filter */}
          <div className="div-align-center">
            <div className="flex-row align-items-center filter-margins" >
              <h3 style={{width:20 + '%'}}>Room type</h3>
                <div className="flex-column">
                  <ul>
                    {distinctBedrooms.map(distinctBedroom => 
                      <li className="checkbox-list">
                        <input
                          type="checkbox"
                          id={distinctBedroom}
                          checked={this.props.currentBedroomFilter === distinctBedroom}
                          onChange={e => this.props.toggleCheckedBedFilter(e)}
                          className="checkboxes-filters"
                        />
                        <span> {distinctBedroom} bedroom </span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              {/* Square footage filters */}
              <div className="flex-row align-items-center filter-margins" >
              <h3 style={{width:20 + '%'}}>Square footage</h3>
                <div className="flex-column">
                  <ul>
                    <li className="checkbox-list">
                      <input
                        type="checkbox"
                        id="600"
                        checked={this.props.checked}
                        onChange={e => this.props.toggleCheckedFootageSmall(e)}
                        className="checkboxes-filters"
                      />
                        <span> 600 - 800 </span>
                      </li>
                  <li className="checkbox-list">
                        <input
                          type="checkbox"
                          id="800"
                          checked={this.props.checked}
                          onChange={e => this.props.toggleCheckedFootageMedium(e)}
                          className="checkboxes-filters"
                        />
                        <span> 800 - 1000  </span>
                      </li>
                      <li className="checkbox-list">
                        <input
                          type="checkbox"
                          id="1000"
                          checked={this.props.checked}
                          onChange={e => this.props.toggleCheckedFootageBig(e)}
                          className="checkboxes-filters"
                        />
                        <span> 1000+  </span>
                      </li>
                  </ul>
                </div>
              </div>

















          </div>
        </div>
      </React.Fragment>
    )
  }
}


export default FilterBar