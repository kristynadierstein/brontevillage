import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

//import imagery
import Logo from "./images/Logo_Bronte_Village.png";

//import components
import FilterBar from "./components/filterbar";

import SuitesCard from './components/cards';



class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      suites: null,
      filteredResults: null, 
      filteredBedResults: null, 
      filterBedChecked: false, 
      currentBedroomFilter: null, 
      filterFootageChecked: false, 
      filteredFootageSmallResults: null, 
      filteredFootageMediumResults: null, 
      filteredFootageBigResults: null, 
      currentFootageFilter: null
    };

    this.toggleCheckedBedFilter = this.toggleCheckedBedFilter.bind(this)
    this.toggleCheckedFootageSmall = this.toggleCheckedFootageSmall.bind(this)
    this.toggleCheckedFootageMedium = this.toggleCheckedFootageMedium.bind(this)
    this.toggleCheckedFootageBig = this.toggleCheckedFootageBig.bind(this)
  }

  componentDidMount (){
    fetch('https://api.airtable.com/v0/appMw45DWCwsT5CvG/Suites?api_key=keyItT7KyJ8jjlQyQ')
    .then((resp) => resp.json())
    .then(data => {
      console.log(data);
      this.setState({
        suites: data.records,
        filteredResults: data.records
      });
    }).catch(err => {
      // Error :()
    });
  }

  toggleCheckedBedFilter(e) {
    console.log(e.target);
    console.log(e.target.id)
    if (e.target.checked) {
      // Show sx bedroom suites if checked
      let results = []
      results = this.state.suites.filter(suite => suite.fields.rooms === e.target.id)
      console.log( 'Showing filtered suites with X bedrooms:', results)
      this.setState({
        filterBedChecked: true,
        filteredBedResults: results,
        currentBedroomFilter: e.target.id
      })
    } else {
      // Show all suites if unchecked
      console.log('Showing all suites - no filter:', this.state.suites)
      this.setState({
        filterBedChecked: false,
        filteredBedResults: this.state.suites,
        currentBedroomFilter: null
      })
    }
  }
  

  
  
  toggleCheckedFootageSmall(e) {
      console.log(e.target)
      if (e.target.checked) {
        let id = parseInt(e.target.id, 10)
        // preparing data for footage filter: 
        let squareSizes = [];
        this.state.suites.map((record) => {
          squareSizes.push(record.fields.size) 
        })
        let results = []
        results = this.state.suites.filter(suite => suite.fields.size >= id && suite.fields.size <= 800)
        console.log('Showing only results for Small footage:', results)
        this.setState({
          filterFootageChecked: true, 
          filteredFootageSmallResults: results, 
          currentFootageFilter: e.target.id
        })
      } else {
      // Show all suites if unchecked
      console.log('need to come up with elseif statement to display only beds if there is any filter')
      }
  }
    
    toggleCheckedFootageMedium(e) {
      console.log(e.target)
      if (e.target.checked) {
        let id = parseInt(e.target.id, 10)
        // preparing data for footage filter: 
        let squareSizes = [];
        this.state.suites.map((record) => {
          squareSizes.push(record.fields.size) 
        })
        let results = []
        results = this.state.suites.filter(suite => suite.fields.size >= id && suite.fields.size <= 1000)
        console.log('Showing only results for Medium footage:', results)
        this.setState({
          filterFootageChecked: true, 
          filteredFootageMediumResults: results, 
          currentFootageFilter: e.target.id
        })
      } else {
      // Show all suites if unchecked
      console.log('need to come up with elseif statement to display only beds if there is any filter')
      }
    }
 
    toggleCheckedFootageBig(e) {
      console.log(e.target)
      if (e.target.checked) {
        let id = parseInt(e.target.id, 10)
        // preparing data for footage filter: 
        let squareSizes = [];
        this.state.suites.map((record) => {
          squareSizes.push(record.fields.size) 
        })
        let results = []
        results = this.state.suites.filter(suite => suite.fields.size >= id )
        console.log('Showing only results for Big footage:', results)
        this.setState({
          filterFootageChecked: true, 
          filteredFootageBigResults: results, 
          currentFootageFilter: e.target.id
        })
      } else {
      // Show all suites if unchecked
      console.log('need to come up with elseif statement to display only beds if there is any filter')
      }
    }
 
    // finalFilter() {
    //   if (this.state.filterBedChecked || this.state.filterFootageChecked) {
    //   let bedResultsFilter = new Array(this.state.filteredBedResults)
    //   let smallFootage = new Array(this.state.filteredFootageSmallResults)
    //   let mediumFootage = new Array(this.state.filteredFootageMediumResults)
    //   let bigFootage = new Array(this.state.filteredFootageBigResults)
      

    //   bedResultsFilter.map

    //   let finalResults = []

    // } else {
    //   console.log("no filter selected")
    // }
    // }    
    
    
    render(){

      // destructuring  => "suites" were not defined, so we need to crete a const inside render, in order to avoid creating many constants we just use  the below, curly brackets can be even empty and just declzre this.state
      const { suites, filterChecked } = this.state;
      
      //this is the way how to do it with hooks
      // const [state, setState] = useState()
      
      // this.finalFilter() 
      

    return (
      <Router>
        <React.Fragment>
          <nav className="navbar">
          
            <a className="navbar-brand" href="#"><img src={Logo} alt="Logo" style={{width:'150px', marginLeft: '15px'}} /></a>
          </nav>
          <div>
            {!suites && 'loading...'}
            {suites && (
              <FilterBar 
                suites={suites}
                toggleCheckedBedFilter={this.toggleCheckedBedFilter}
                currentBedroomFilter={this.state.currentBedroomFilter}
                toggleCheckedFootageSmall={this.toggleCheckedFootageSmall}
                toggleCheckedFootageMedium = {this.toggleCheckedFootageMedium}
                toggleCheckedFootageBig = {this.toggleCheckedFootageBig}
                currentFootageFilter={this.currentFootageFilter}
             />
            )}
          </div>
          <div className="container-fluid padding-main-container">
            <div className="row">
                  {!suites && 'loading...'}

                  {suites && this.state.filteredResults.map(suite => 
                    
                    <SuitesCard  {...suite.fields} key={suite.fields.id} /> )}
            </div>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/topics">Topics</Link>
                </li>
              </ul>
            </div>
          </React.Fragment>
          </Router>
      );
  }
}

export default App



