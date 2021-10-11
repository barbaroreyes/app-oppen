import React from 'react';
import {Switch, Route } from 'react-router-dom';
import  Home1 from '../pages/Home1'
import Projects from '../pages/Projects'

const Side = () => {
  return (
    <div className="side">
     
          <Switch>
              <Route exact path="/">
                  <Home1/>
              </Route>
              <Route exact path="/projects">
                  <Projects/>
              </Route>
          </Switch>
     
    </div>
  );
}

export default Side;
