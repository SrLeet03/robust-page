// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import HighRes from './components/high-res';
import Footer from './components/footer';
import EmailUs from './components/email-us';
import ProjectList from './components/projects';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/what-we-do" component={ProjectList} />
          <Route path="/" exact>
            {/* Everything except ProjectList */}
            {/* Uncomment the line below if you want to include ProjectList */}
            {/* <ProjectList /> */}
            <HighRes />
            <EmailUs />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
