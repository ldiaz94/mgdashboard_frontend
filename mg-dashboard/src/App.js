import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import axios from "axios";
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

    pages: [    ],

    loans: [    ]
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
        axios
          .get("/api/pages/")
          .then(res => this.setState({ pages: res.data }))
          .catch(err => console.log(err));
        axios
          .get("/api/loans/")
          .then(res => this.setState({ loans: res.data }))
          .catch(err => console.log(err));
        };

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
