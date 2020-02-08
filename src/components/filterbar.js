//import libraries
import React from "react";

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

    this.props.suites.map((record) => {
      rooms.push(record.fields.rooms)
      return rooms
    })

    const distinctBedrooms = [...new Set(rooms)];
 
    return(
      <React.Fragment>
        <div className="filter flex-row">  
          <div className="flex-column">
            <h1> Find your home </h1>
          </div>
          
          <div className="div-align-center">
            {/* Bedroom filter */}
            <div className="flex-row align-items-center filter-margins" >
              <h3 style={{width:20 + '%'}}>Room type</h3>
                <div className="flex-column">
                  <ul>
                    {distinctBedrooms.map(distinctBedroom => 
                      <li className="checkbox-list" key={distinctBedroom}>
                        <input
                          type="checkbox"
                          name={`bedroom-${distinctBedroom}`}
                          id={distinctBedroom}
                          checked={this.props.currentBedroomFilters.includes(distinctBedroom)} 
                          onChange={e => this.props.handleToggle(e)}
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
                      name="footage-small"
                      id="600"
                      checked={this.props.currentFootageFilters.includes(600)}
                      onChange={e => this.props.handleToggle(e)}
                      className="checkboxes-filters"
                    />
                      <span> 600 - 800 </span>
                    </li>
                  <li className="checkbox-list">
                      <input
                        type="checkbox"
                        name="footage-medium"
                        id="800"
                        checked={this.props.currentFootageFilters.includes(800)}
                        onChange={e => this.props.handleToggle(e)}
                        className="checkboxes-filters"
                      />
                      <span> 800 - 1000  </span>
                    </li>
                    <li className="checkbox-list">
                      <input
                        type="checkbox"
                        name="footage-big"
                        id="1000"
                        checked={this.props.currentFootageFilters.includes(1000)}
                        onChange={e => this.props.handleToggle(e)}
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