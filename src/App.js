import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      apiResponse: {}
    };
  }

  render() {
    return (
        <div className="App">
          <div className="logos">
            {this.state.apiResponse && 'call fetch() and use the response here'}
          </div>
        </div>
    );
  }
}

export default App;
