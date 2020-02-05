import React, { Component } from 'react';

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
      currentBedroomFilters: [], 
      filterFootageChecked: false, 
      filteredFootageSmallResults: null, 
      smallFootageFilter: null
      // filteredFootageMediumResults: null, 
      // filteredFootageBigResults: null, 
    };

    this.handleToggle = this.handleToggle.bind(this)
    this.toggleCheckedBedFilter = this.toggleCheckedBedFilter.bind(this)
    this.toggleCheckedFootageSmall = this.toggleCheckedFootageSmall.bind(this)
    this.finalFilter = this.finalFilter.bind(this)
    // this.toggleCheckedFootageMedium = this.toggleCheckedFootageMedium.bind(this)
    // this.toggleCheckedFootageBig = this.toggleCheckedFootageBig.bind(this)
  }

  componentDidMount (){
    fetch('https://api.airtable.com/v0/appcGhlPGfDOCALss/Suites?api_key=keyItT7KyJ8jjlQyQ')
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

  //STEP I  
  handleToggle(e) {
    const { id, name, checked } = e.target
    if (name.includes('bedroom')) {
      if (this.state.currentBedroomFilters.includes(id) && !checked) {
        const bedroomFilterIds = this.state.currentBedroomFilters.filter(filters => filters !== id)
        this.setState({
          currentBedroomFilters: bedroomFilterIds
        }, () => { 
          this.toggleCheckedBedFilter()
          }
        )
      } else {
      const bedroomFilterIds = this.state.currentBedroomFilters.concat(id)
      this.setState({
        currentBedroomFilters: bedroomFilterIds
      }, () => { 
        this.toggleCheckedBedFilter(id, checked)
        }
      )}; 
    } else if (name.includes('footage')) {
      this.setState({
        filterFootageChecked: true, 
        smallFootageFilter: id
      }, () => {
        this.toggleCheckedFootageSmall(id, checked)
      });
    }
  }  
  

  // STEP 2A
  toggleCheckedBedFilter() {
    //if there is any BEDROOM FILTER, match with IDs and push to final results
    if (this.state.currentBedroomFilters.length > 0) {
      let results = []
      results = this.state.currentBedroomFilters.flatMap(id => 
       this.state.suites.filter(suite => suite.fields.rooms === id))
      console.log( 'Showing filtered suites with X bedrooms:', results)
      this.setState({
        filteredBedResults: results
      }, () => {
        this.finalFilter()
      })
    } else {
      // Show all suites if unchecked
      console.log('Showing all suites - no filter:', this.state.suites)
      this.setState({
        filteredBedResults: this.state.suites,
        currentBedroomFilter: null
      }, () => {
        this.finalFilter()
      })
    }
  }

  // STEP 2B
  toggleCheckedFootageSmall(id, checked) {
      if (checked) {
        let idInt = parseInt(id, 10)
        let results = []
        results = this.state.suites.filter(suite => suite.fields.size >= idInt && suite.fields.size <= 800)
        console.log('Showing only results for Small footage:', results)
        this.setState({
          filteredFootageSmallResults: results
        }, () => {
          this.finalFilter()
        })
      } else {
      // Show all suites if unchecked
      console.log('need to come up with elseif statement to display only beds if there is any filter')
      this.setState({
        filterFootageChecked: false, 
        filteredFootageSmallResults: this.state.suites, 
        smallFootageFilter: null
      })
      }
      this.finalFilter()
  }
    
    // toggleCheckedFootageMedium(e) {
    //   if (e.target.checked) {
    //     let id = parseInt(e.target.id, 10)
    //     let results = []
    //     results = this.state.suites.filter(suite => suite.fields.size >= id && suite.fields.size <= 1000)
    //     console.log('Showing only results for Medium footage:', results)
    //     this.setState({
    //       filterFootageChecked: true, 
    //       filteredFootageMediumResults: results, 
    //       currentFootageFilter: e.target.id
    //     })
    //   } else {
    //   // Show all suites if unchecked
    //   console.log('need to come up with elseif statement to display only beds if there is any filter')
    //   }
    // }
 
    // toggleCheckedFootageBig(e) {
    //   if (e.target.checked) {
    //     let id = parseInt(e.target.id, 10)
    //     let results = []
    //     results = this.state.suites.filter(suite => suite.fields.size >= id )
    //     console.log('Showing only results for Big footage:', results)
    //     this.setState({
    //       filterFootageChecked: true, 
    //       filteredFootageBigResults: results, 
    //       currentFootageFilter: e.target.id
    //     })
    //   } else {
    //   // Show all suites if unchecked
    //   console.log('need to come up with elseif statement to display only beds if there is any filter')
    //   }
    // }


    
    finalFilter() {
      let finalResults = [];
      let bedResults = [];
      let smallFootageResults = [];

      // If BOTH bed and footage filters are applied
      if (this.state.filteredBedResults.length > 0 && this.state.filterFootageChecked) {
        this.state.filteredBedResults.map((result) => bedResults.push(result))
        this.state.filteredFootageSmallResults != null ? this.state.filteredFootageSmallResults.map(result => smallFootageResults.push(result)) : console.log("none of the small one was selected");
        finalResults = [...bedResults, ...smallFootageResults]
        this.filterUnique(finalResults)
      }
      // If ONLY bed filter type is applied
      else if (this.state.filteredBedResults.length > 0) {
        this.setState ({
          filteredResults: this.state.filteredBedResults
        })
      }
      // If ONLY footage filter type is applied
      else if (this.state.filterFootageChecked) {
        this.state.filteredFootageSmallResults != null ? this.state.filteredFootageSmallResults.map(result => smallFootageResults.push(result)) : console.log("none of the small one was selected");
        this.setState ({
          filteredResults: smallFootageResults
        })
      }
      // If NEITHER filter type is applied
      else {
        console.log ("none of the filters is applied for beds, coming from finalfilter")
        return this.state.suites
      }
    }

    // if BOTH filters are applied, select only unique values corresponding to the square footage size
    filterUnique(finalResults){
      let uniqueResults = finalResults.filter(result => result.fields.size >= 600 && result.fields.size <= 800)
      this.setState ({
        filteredResults: uniqueResults
      })
    }


    
    render(){
    // destructuring  => "suites" were not defined, so we need to crete a const inside render, in order to avoid creating many constants we just use  the below, curly brackets can be even empty and just declzre this.state
    const { suites } = this.state
    //this is the way how to do it with hooks
    // const [state, setState] = useState()

    return (
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
              currentBedroomFilters={this.state.currentBedroomFilters}
              toggleCheckedFootageSmall={this.toggleCheckedFootageSmall}
              smallFootageFilter={this.state.smallFootageFilter}
              handleToggle = {this.handleToggle}
              finalFilter = {this.finalFilter}
              // toggleCheckedFootageMedium = {this.toggleCheckedFootageMedium} 
              // toggleCheckedFootageBig = {this.toggleCheckedFootageBig}
            />
          )}
        </div>
        <div className="container-fluid padding-main-container">
          <div className="row">
                {!suites && 'loading...'}

                {suites && this.state.filteredResults.map(suite => 
                  
                  <SuitesCard  {...suite.fields} key={suite.fields.id} /> )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App



