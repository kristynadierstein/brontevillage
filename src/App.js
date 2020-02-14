import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//import styling
import '../src/styles/main.scss';

// Pages
import MainPage from './pages/Main';
import SuitePage from './pages/Suite';
import Navbar from './components/NavBar';


function App() {
  const [suites, setSuites] = useState();

  // Fetch data on first render only
  useEffect(() => {
    fetch('https://api.airtable.com/v0/appcGhlPGfDOCALss/Suites?api_key=keyItT7KyJ8jjlQyQ')
    .then(res => res.json())
    .then(data => {
      console.log('Data fetched using the "useEffect" hook:', data);
      
      // Store API data into this component's "suites" state
      setSuites(data.records)
    })
    .catch(err => {
      console.log(err);
    });
  }, []);

  console.log('App.js - Value of "suites" state:', suites);

  return (
    <React.Fragment>
      {/* Navbar */}
        <Navbar />
      {/* Router */}
      <BrowserRouter>
        <Switch>
          {/* Main page */}
          <Route exact path='/'>
            <MainPage
              suitesList={suites}
            />
          </Route>

          {/* Suite details page */}
          <Route path='/suites/:suiteId'>
            <SuitePage
              suitesList={suites}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;