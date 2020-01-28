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
      suites: [],
    };
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

  render() {
    return (
      <Router>
        <React.Fragment>
          <nav className="navbar">
          
            <a className="navbar-brand" href="#"><img src={Logo} alt="Logo" style={{width:'150px', marginLeft: '15px'}} /></a>
          </nav>
          <div>
            < FilterBar />
          </div>
          <div className="container-fluid padding-main-container">
            <div className="row">

                  {this.state.suites.map(suite => 
                    
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



