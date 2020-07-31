import React, {Component} from 'react';
import Navbar from './components/Layout/Navbar';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Signin from './components/Auth/SignIn';
import Signup from './components/Auth/SignUp';
import Dashboard from './components/Dashboard/Dashboard';
import Createproject from './components/Projects/CreateProject';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/Signin" component={Signin}/>
            <Route path="/Signup" component={Signup}/>
            <Route path="/create" component={Createproject}/>
          </Switch>
        </div>
        </BrowserRouter>
    );
  }
}

export default App;