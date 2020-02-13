import React from 'react';
import './index.scss';
import FilterBar from '../../components/FilterBar';
import SuiteCard from '../../components/SuiteCard';

class MainPage extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      suites: null,
      currentBedroomFilters: [], 
      filteredBedResults: null, 
      currentFootageFilters: [],
      filteredFootageSmallResults: [], 
      filteredFootageMediumResults: [],
      filteredFootageBigResults:  [], 
      filteredFootageResults: null,
      filteredResults: null, 
    };

    this.handleToggle = this.handleToggle.bind(this)
    this.handleToggleBedrooms = this.handleToggleBedrooms.bind(this)
    this.handleToggleFootage = this.handleToggleFootage.bind(this)
    this.toggleCheckedBedFilter = this.toggleCheckedBedFilter.bind(this)
    this.handleFootageResults = this.handleFootageResults.bind(this)
    this.finalFilter = this.finalFilter.bind(this)
    this.handleSmallFootage = this.handleSmallFootage.bind(this)
    this.handleMediumFootage = this.handleMediumFootage.bind(this)
    this.handleBigFootage = this.handleBigFootage.bind(this)
  }

  componentDidUpdate(){
    if (this.state.suites != this.props.suitesList){
      this.setState({
        suites: this.props.suitesList,
        filteredResults: this.props.suitesList
      }, () => {
        console.log("loaded suites from App.js: ", this.state.suites, this.state.filteredResults)
      });
    } 
  }

  //STEP I  
  handleToggle(e) {
    const { name } = e.target
    if (name.includes('bedroom')) {  
      this.handleToggleBedrooms(e) 
    } else if (name.includes('footage')) {
      this.handleToggleFootage(e)
    }
  }  
  
  handleToggleBedrooms(e) {
    const { id, checked } = e.target
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
      this.toggleCheckedBedFilter()
      }
    )};
  }

  handleToggleFootage(e) {
    const { id, checked } = e.target
    let idInt = parseInt(id, 10)
    if (this.state.currentFootageFilters.includes(idInt) && !checked) {
      const footageFilterIds = this.state.currentFootageFilters.filter(filters => filters !== idInt)
      this.setState({
        currentFootageFilters: footageFilterIds
      }, () => {
        this.toggleCheckedFootage(id, checked)
        }
      )
    } else {
    const footageFilterIds = this.state.currentFootageFilters.concat(idInt)
    this.setState({
      currentFootageFilters: footageFilterIds
    }, () => {
      this.toggleCheckedFootage(id, checked)
    }
    )};
  }

  toggleCheckedBedFilter() {
    if (this.state.currentBedroomFilters.length > 0) {
      let results = []
      results = this.state.currentBedroomFilters.flatMap(id => 
       this.state.suites.filter(suite => suite.fields.rooms === id))
        this.setState({
          filteredBedResults: results
        }, () => {
        this.finalFilter()
        })
    } else {
      this.setState({
        filteredBedResults: this.state.suites,
        currentBedroomFilter: null
      }, () => {
        this.finalFilter()
      })
    }
  }

  toggleCheckedFootage(id, checked) {
    if (this.state.currentFootageFilters.length > 0) {      
      if (id === "600"){
        this.handleSmallFootage(checked)
      }
      if (id === "800" ) {
        this.handleMediumFootage(checked)
      }
      if (id === "1000") {
        this.handleBigFootage(checked)
      }
    } else {
      // Show all suites if unchecked
      this.setState({
        filteredFootageResults: this.state.suites,
      }, () => {
        this.finalFilter()
      })
    }
  }

  handleSmallFootage(checked) {
    if (checked) {
      let resultsSmall = []
      resultsSmall = this.state.suites.filter(suite => suite.fields.size >= 600 && suite.fields.size <= 800)
      this.setState({
        filteredFootageSmallResults: resultsSmall,
      }, () => {
        this.handleFootageResults()
      })
    } else {
      this.setState({
        filteredFootageSmallResults: []
      }, () => {
        this.handleFootageResults()
      })
    } 
  }

  handleMediumFootage(checked) {
    if (checked) {
      let resultsMedium = []
      resultsMedium = this.state.suites.filter(suite => suite.fields.size >= 800 && suite.fields.size <= 1000)
      this.setState({
        filteredFootageMediumResults: resultsMedium,
      }, () => {
        this.handleFootageResults()
      })
    } else {
      this.setState({
        filteredFootageMediumResults: []
      }, () => {
        this.handleFootageResults()
      })
    } 
  }

  handleBigFootage(checked) {
    if (checked) {
      let resultsBig =[]
      resultsBig = this.state.suites.filter(suite => suite.fields.size >= 1000)
      this.setState({
        filteredFootageBigResults: resultsBig,
      }, () => {
      this.handleFootageResults()
      })
    } else {
      this.setState({
        filteredFootageBigResults: []
      }, () => {
        this.handleFootageResults()
      })
    }
  }

  handleFootageResults() {
    let smallSuites = this.state.filteredFootageSmallResults
    let mediumSuites = this.state.filteredFootageMediumResults
    let bigSuites = this.state.filteredFootageBigResults

    let finalFootageSuites =[...smallSuites||[], ...mediumSuites||[], ...bigSuites||[]]

    this.setState ({
      filteredFootageResults: finalFootageSuites
    }, () => {
      this.finalFilter()
    })
  }
   
  finalFilter() {
    if (this.state.currentFootageFilters.length > 0 && this.state.filteredBedResults != null) {
      let finalResultsCombined = []
      finalResultsCombined = this.state.currentBedroomFilters.flatMap(id => this.state.filteredFootageResults.filter(result => result.fields.rooms === id))
      this.setState({
        filteredResults: finalResultsCombined
      })
    } else if (this.state.currentFootageFilters.length > 0) {
      this.setState ({
        filteredResults: this.state.filteredFootageResults
      })
    } else if (this.state.filteredBedResults != null) {
      this.setState({
        filteredResults: this.state.filteredBedResults
      })
    } else {
      this.setState({
        filteredResults: this.state.suites
      })
    }
  }

    
  render(){
    console.log('MAIN PAGE - "suiteList" inherited from App.js:', this.props.suitesList);

	  // destructuring  => "suites" were not defined, so we need to crete a const inside render, in order to avoid creating many constants we just use  the below, curly brackets can be even empty and just declzre this.state
	  const { suites } = this.state
	  //this is the way how to do it with hooks
	  // const [state, setState] = useState()
	    
	  return (
	    <React.Fragment>
	      <div>
          {/* Show loading animation while data gets fetched */}
	        {!suites && 'loading...'}

          {/* Show filter bar once data is fetched */}
	        {suites && (
	          <FilterBar 
	            suites={suites}
	            toggleCheckedBedFilter={this.toggleCheckedBedFilter}
	            currentBedroomFilters={this.state.currentBedroomFilters}
	            toggleCheckedFootageSmall={this.toggleCheckedFootageSmall}
	            smallFootageFilter={this.state.smallFootageFilter}
	            handleToggle={this.handleToggle}
	            finalFilter={this.finalFilter}
	            currentFootageFilters={this.state.currentFootageFilters}
	          />
	        )}
	      </div>
	      <div className="container-fluid padding-main-container">
	        <div className="row">
            {/* Show loading animation while data gets fetched */}
	          {!suites && 'loading...'}

            {/* Dynamically render filtered results */}
	          {suites && this.state.filteredResults.map(suite => 
	            <SuiteCard
	            	{...suite.fields}
	            	key={suite.fields.id}
	            />
	          )}
	        </div>
	      </div>
	    </React.Fragment>
	  );
  }
}

export default MainPage;