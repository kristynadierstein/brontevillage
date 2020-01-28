//import libraries
import React from "react";

//import components
import Filter from "../components/filter.js"


class FilterBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      suites: [], 
    }
    
  }

  componentDidMount (){
    fetch('https://api.airtable.com/v0/appMw45DWCwsT5CvG/Suites?api_key=keyItT7KyJ8jjlQyQ')
    .then((resp) => resp.json())
    .then(data => {
      console.log(data);
      this.setState({ suites: data.records });
    }).catch(err => {
      // Error :()
    });
  }

  render(){
    console.log(this.state)
    let rooms = []
    let roomsFlat = []
    this.state.suites.map((record) => {
      rooms.push({rooms: record.fields.rooms})
    })
    console.log(rooms)
    
    //geting an array of how many bedrooms are in the selection filter, adding only unique values to array
    rooms.map((room) => {
     !roomsFlat.includes(room.rooms) && roomsFlat.push(room.rooms)
    })

    console.log(roomsFlat)

    return(
      <React.Fragment>
        <div className="filter flex-row">
          <div className="flex-column">
            <h1> Find your home </h1>
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