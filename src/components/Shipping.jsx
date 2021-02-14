import React, { Component } from 'react';
import ReactDOM, { Render } from 'react-dom';
import '../index.css'; // Maybe add shipping CSS
// import App from './App';

export default function Shipping(props) {
	return (
		<div className="columns">
        <div className="hero column col-auto col-mx-auto">
          <div className="panel">
            <div className="panel-header">
              <div className="panel-title">
                <h6>Shipping &amp; Billing Info</h6>
              </div>
            </div>
            <form className="form-horizontal" action="/buy" method="post">
              <input name="items" type="hidden" defaultValue="{{ items }}" />
              <div className="panel-body">
                <div className="form-group">
                  <div className="col-3 col-sm-12">
                    <label className="form-label" htmlFor="cardholder-{{ field[0]}}">TEST</label>
                  </div>
                  <div className="col-9 col-sm-12">
                    <input className="form-input" type="text" name="{{ field[0] }}" id="cardholder-{{ field[0] }}" placeholder="{{ field[1] }}" />
                  </div>
                </div>
              </div>
              <div className="panel-footer">
                <button className="btn btn-primary" id="submit">
                  Next →
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>


	)
}