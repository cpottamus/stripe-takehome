import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter as Router,
} from "react-router-dom";
import Routes from "./Routes"


ReactDOM.render(
  <React.StrictMode>
	<div className="columns">
      <div className="column col-auto col-mx-auto">
        <h2>hotdog pins - they're 🔥, 🐶</h2>
        <p>Wear your favorite hotdog emoticon</p>
      </div>
	</div>
    <Router>
    	<Routes />
	</Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();