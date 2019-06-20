/* eslint-disable no-unused-expressions */
import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { UniqueCountiesList } from './components/UniqueCountiesList';
import { CountySpotsList } from './components/CountySpotsList';


const App = (props) => {
  return (
    <div>
      <header>
        <div className="container">
          <h1 className="display-4">Build on Spitcast</h1>
          <p className="lead">This is a simple application built on top of few apis including spitcast.</p>
        </div>
      </header>
      <Container>
        <Router>
          <Switch>
            <Route exact path="/" component={UniqueCountiesList} />
            <Route exact path="/county/:countyName" component={CountySpotsList} />
            <Route exact path="/county/:countyName/spot/:spotId" component={CountySpotsList} />
            <Redirect to={"/"} />
          </Switch>
        </Router>
      </Container>
    </div>
  );
}

export default App;
