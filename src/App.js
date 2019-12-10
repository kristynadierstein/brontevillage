import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";



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
            <a className="navbar-brand" href="#">THE VILLAGE</a>
          </nav>
          <div className="container-fluid" style={{height:"100vh"}}>
            <div className="row">
              <div className="col">
                <div className="card-deck">
                  {this.state.suites.map(suite => <SuitesCard {...suite.fields} key={suite.fields.id} /> )}
                </div>
              </div>
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



