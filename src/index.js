//import libraries
import React from 'react';
import ReactDOM from 'react-dom';

//import stylesheets & bootstrap
import './styles/custom-bootstrap.scss';
import './styles//main.scss';

//import fonts
import './assets/fonts/Montserrat-Light.ttf';
import './assets/fonts/Montserrat-LightItalic.ttf';
import './assets/fonts/Montserrat-Regular.ttf';
import './assets/fonts/Unna-Italic.ttf';
import './assets/fonts/Unna-Regular.ttf';


import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
