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
    let squareSizes = [];
    let squareSizesIntegers = []
  



    const { suites } = this.props;
    const { } = this.state;

    this.props.suites.map((record) => {
      rooms.push(record.fields.rooms)
      squareSizes.push(record.fields.size)
    })

    const distinctBedrooms = [...new Set(rooms)];
    const distinctSquareSizes = [...new Set(squareSizes)];

    squareSizes.map(squareSize => {
      const squareSizesInt = parseInt(squareSize, 10)
      squareSizesIntegers.push(squareSizesInt)
    })
    console.log(squareSizesIntegers)


   let bigSuites = squareSizesIntegers.filter(e => e > 1000)
   let mediumSuites = squareSizesIntegers.filter(e => e > 800 && e < 1000)
   let smallSuites = squareSizesIntegers.filter(e => e < 800)

   console.log(bigSuites)
   console.log(mediumSuites)
   console.log(smallSuites)

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

              <div className="flex-row align-items-center filter-margins" >
              <h3 style={{width:20 + '%'}}>Square footage</h3>
                <div className="flex-column">
                  <ul>
                    {distinctSquareSizes.map(distinctSquareSize => 
                      <li className="checkbox-list">
                        <input
                          type="checkbox"
                          id={distinctSquareSize}
                          checked={this.props.currentFootageFilter === distinctSquareSize}
                          onChange={e => this.props.toggleCheckedFootageFilter(e)}
                          className="checkboxes-filters"
                        />
                        <span> {distinctSquareSize} m2 </span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>






{/* 
              <div className="flex-row align-items-center filter-margins" >
              <h3 style={{width:20 + '%'}}>Square footage</h3>
                <div className="flex-column">
                  <ul>
                    {distinctSquareSizes.map(distinctSquareSize => 
                      <li className="checkbox-list">
                        <input
                          type="checkbox"
                          id={distinctSquareSize}
                          checked={this.props.currentFootageFilter === distinctSquareSize}
                          onChange={e => this.props.toggleCheckedFootageFilter(e)}
                          className="checkboxes-filters"
                        />
                        <span> {distinctSquareSize} m2 </span>
                      </li>
                    )}
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