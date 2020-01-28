//import libraries
import React from "react";

//import components
import Filter from "../components/filter.js"


class FilterBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      rooms: [], 
      checked: false,
    }    
  }

  componentDidMount (){
    fetch('https://api.airtable.com/v0/appMw45DWCwsT5CvG/Suites?api_key=keyItT7KyJ8jjlQyQ')
    .then((resp) => resp.json())
    .then(data => {
      console.log(data);
      this.setState({ rooms: data.records });
    }).catch(err => {
      // Error :()
    });
  }
  
  // handleClick(){
  //   this.props.toggleChecked(this.props.room)
  // }

  // toggleChecked(currentSelection){
  //   const NewRooms = this.state.rooms.map(room => {
  //     if (room.rooms === currentSelection) {
  //       room.checked = !room.checked
  //     }
  //     return room
  //   })
  //   this.setState({rooms: NewRooms, checked: this.toggleChecked})
  // }


  render(){
    let rooms = []
    let roomsFlat = []
    this.state.rooms.map((record) => {
      rooms.push({rooms: record.fields.rooms})
    })
    
    //geting an array of how many bedrooms are in the selection filter, adding only unique values to array
    rooms.map((room) => {
     !roomsFlat.includes(room.rooms) && roomsFlat.push(room.rooms)
    })

    roomsFlat.forEach((roomFlat) => {
      rooms.push({room: roomFlat, checked: false})
    })





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
                  {roomsFlat.map((room, index) => {
                  return (
                    <div>
                      <li key={index} className="checkbox-list">
                      <input type="checkbox" className="checkboxes-filters"/>
                      <span>{room} bedroom </span>
                      </li>
                  </div>
                  ) 
                } )}
                </ul>
              </div>
            </div>
            <Filter />
            
          </div>
        </div>
      </React.Fragment>
    )
  }
}


export default FilterBar