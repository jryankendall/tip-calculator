import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//Including Router for possible expansion upon the app at a later date

//Importing Components
import Nav from './components/Nav';

//Importing Pages
import Main, {Err} from './pages';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <div className="App container">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/*" component={Err}/>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
