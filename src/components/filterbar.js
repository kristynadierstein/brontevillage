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
    let rooms = []
    // let roomsFlat = []
    // let squareMeters = []
    // let squareMetersFlat = []

    const { suites } = this.props;
    const { } = this.state;

    this.props.suites.map((record) => {
      rooms.push({rooms: record.fields.rooms})
    })

    // this.state.suites.map((record) => {
    //   squareMeters.push({size: record.fields.size })
    // })
    // console.log(squareMeters)
    
    // //geting an array of how many bedrooms are in the selection filter, adding only unique values to array
    // rooms.map((room) => {
    //  !roomsFlat.includes(room.rooms) && roomsFlat.push(room.rooms)
    // })

    // console.log(roomsFlat)
    // squareMeters.map((unit) => {
    //   !squareMetersFlat.includes(unit.size) && squareMetersFlat.push(unit.size)
    // })
    // console.log(squareMetersFlat)

    return(
      <React.Fragment>
        <div className="filter flex-row">
          
          
          <div className="flex-column">
            <h1> Find your home </h1>
          </div>
          
          
          <div className="div-align-center">
            <div className="flex-row align-items-center filter-margins" >
              <h3 style={{width:20 + '%'}}>Room type</h3>
                <div className="flex-column">
                  <ul>
                      <li className="checkbox-list">
                        <input
                          type="checkbox"
                          id='1'
                          checked={this.props.checked}
                          onChange={e => this.props.toggleCheckedOneBedroom(e)}
                          className="checkboxes-filters"
                        />
                        <span>1 bedroom </span>
                      </li>
                  
                    {/*this.props.suites.map((room, index) => {
                    return (
                      <div>
                        <li key={index} className="checkbox-list">
                        <input
                          type="checkbox"
                          value={1}
                          checked={this.checked.suites}
                          onChange={e => this.props.toggleCheckedOneBedroom(e)}
                          className="checkboxes-filters"
                        />
                        <span>1 bedroom </span>
                        </li>
                      </div>
                    ) 
                    } ) */}
                  </ul>
                </div>
              </div>



   
            {/* <div className="flex-row align-items-center filter-margins" >
              <h3 style={{width:20 + '%'}}>Square footage</h3>

              <div className="flex-column">
                <ul>
                  {squareMetersFlat.map((size, index) => {
                  return (
                    <div>
                      <li key={index} className="checkbox-list">
                      <input type="checkbox" value={size} checked={this.state.checked} onChange={this.toggleChecked.bind} onClick={this.handleCheck.bind} className="checkboxes-filters"/>
                      <span>{size} m2 </span>
                      </li>
                  </div>
                  ) 
                } )}
                </ul>
              </div>
            </div> */}

            
          </div>
        </div>
      </React.Fragment>
    )
  }
}


export default FilterBar