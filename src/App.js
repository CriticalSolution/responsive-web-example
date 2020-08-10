import React, { Component } from 'react';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import ListPage from './components/ListPage';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home} />
          <Route path='/Home' exact={true} component={Home} />
          <Route path='/About' exact={true} component={About} />
          <Route path='/Contact' exact={true} component={Contact} />
          <Route path='/Services' exact={true} component={Services} />    
          <Route path='/ListPage' exact={true} component={ListPage} /> 
        </Switch>
      </Router>
    );
  }
}
export default App;
