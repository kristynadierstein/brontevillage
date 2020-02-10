import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Images
import Logo from "./assets/images/Logo_Bronte_Village.png";
// Pages
import MainPage from './pages/Main';
import SuitePage from './pages/Suite';

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
      <nav className="navbar">     
        <a
          className="navbar-brand"
          href="https://www.brontevillageapartments.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Logo}
            alt="Logo"
            style={{
              width:'150px',
              marginLeft: '15px'
            }}
          />
        </a>
      </nav>

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