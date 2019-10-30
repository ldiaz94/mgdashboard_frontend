import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import LoansTable from './components/LoansTable';
import Greeting from './components/Greeting';
import Graph from './components/Graph';
import About from './components/pages/About';

export class App extends Component {

  state = {
    user: {
        id: 10294021,
        name: "Luis"
    },

    pages: [
      {
        id: 1,
        title: "Home",
        type: "normal",
        url: "/"
      },
      {
        id: 2,
        title: "About",
        type: "normal",
        url: "/about"
      },
      {
        id: 3,
        title: "Login",
        type: "login",
        url: "#"
      }
    ],

    loans: [
      {
        id: 1,
        name: "Mortgage",
        loan: 150000,
        deposit: 30000,
        ltv: 83.3,
        term: 25,
        outstanding: 30000
      },
      {
        id: 2,
        name: "Car",
        loan: 13000,
        deposit: 5000,
        ltv: NaN,
        term: 3.5,
        outstanding: 10000
      }
    ]
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar pages={ this.state.pages } />

          <Route exact path="/" render={props => (
            <React.Fragment>
              <Greeting user= { this.state.user }/>
              <LoansTable loans= { this.state.loans }/>
              <Graph />
            </React.Fragment>
          )}/>

          <Route path="/about" component={About}/>
        </React.Fragment>
      </Router>
    )
  }
}

export default App
