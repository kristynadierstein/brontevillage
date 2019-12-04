import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import SuitesCard from './components/cards';

const provSuites = [
  {
      id: '1401',
      size: '1073',
      rooms:'2',
      den: '1',
      description:'facing interal courtyard',
      imageURL: 'https://via.placeholder.com/362x200',
  },
  {
      id: '1402',
      size: '456',
      rooms:'6',
      den: '2',
      description: 'balcony',
      imageURL: 'https://via.placeholder.com/362x200',
  },
  {
      id: '1400',
      size: '555',
      rooms:'4',
      den: '2',
      description: 'balcony',
      imageURL: 'https://via.placeholder.com/362x200',
  },
  {
      id: '1406',
      size: '666',
      rooms:'4',
      den: '2',
      description: 'balcony',
      imageURL: 'https://via.placeholder.com/362x200',
  },
];

export default function App() {
  return (
    <Router>
      <nav className="navbar">
        <a className="navbar-brand" href="#">THE VILLAGE</a>
      </nav>
      <div className="container-fluid" style={{height:"100vh"}}>
        <div className="row">
          <div className="col">
            <div className="card-deck">
              {provSuites.map(suite => <SuitesCard {...suite} /> )}
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

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}



