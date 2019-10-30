import React, { Component } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import LoansTable from './components/LoansTable';
import Greeting from './components/Greeting';
import Graph from './components/Graph';

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
        type: "normal"
      },
      {
        id: 2,
        title: "About",
        type: "normal"
      },
      {
        id: 3,
        title: "Login",
        type: "login"
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
      <div>
        <Navbar pages={ this.state.pages } />
        <Greeting user= { this.state.user }/>
        <LoansTable loans= { this.state.loans }/>
        <Graph />
      </div>
    )
  }
}

export default App
