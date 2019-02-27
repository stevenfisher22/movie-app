import React, { Component } from 'react';
import './components/CSS/app.css';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      movies: []
    }
  }
  

  componentWillMount() {
    // fetch(url)  
  };
  render() {
    return (
      <div>
        <img src="../images/bg_3.jpg" alt="popcorn"></img>
      </div>
    );
  }
}

export default App;
