import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor() {
    super();
    this.state = {
      char: [],
    }
  }

  componentDidMount() {
    console.log("Did Mount")
    let promise = axios.get('https://swapi.co/api/people')
    promise.then(res => {
      this.setState({char: res.data.results})
    })
  }

  render() {
    console.log(this.state.char)
    const characters = this.state.char.map((e,i) => {
      return <div key={i}><h1>{e.name}</h1></div>
    })
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1>Star Wars Characters:</h1>
        <h6>{characters}</h6>
      </div>
    );
  }
}

export default App;
