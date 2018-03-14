import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <div className="logos">
            {this.props.apiResponse && 'call fetch() and use the response here'}
          </div>
        </div>
    );
  }
}

export default App;
