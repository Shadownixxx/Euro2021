import React from 'react';
import './App.css';

import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';

import Teams from './components/Teams';
import MatchesList from './components/MatchesList';
import MatchesList2 from './components/MatchesList2';
import Start from './components/Start';
import Error from './components/Error';

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className='App'>
            <nav>
              <ul>
                <li><NavLink to='/' >Start</NavLink></li>
                <li><NavLink to='/teams'>Lista drużyn</NavLink></li>
                <li><NavLink to='/matches'>Mecze - kolejka 1</NavLink></li>
                <li><NavLink to='/matches2'>Mecze - kolejka 2  ( aktywne zakłady!! )</NavLink></li>
              </ul>
            </nav>
            <Switch>
              <Route path='/' exact component={Start} />
              <Route path='/teams' component={Teams} />
              <Route path='/matches' component={MatchesList} />
              <Route path='/matches2' component={MatchesList2} />
              <Route component={Error} />
            </Switch>
          </div>
        </Router>
      </Provider>

    );
  }
}

export default App;
