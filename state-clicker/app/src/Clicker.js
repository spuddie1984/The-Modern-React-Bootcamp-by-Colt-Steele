import React, { Component } from 'react';
import './Clicker.css';

class Clicker extends Component {
  constructor(props) {
    super(props);
    this.state = {randNum: 0};
    this.randNum = this.randNum.bind(this);
  }

  randNum() {
    this.setState({randNum: Math.floor(Math.random() * 10) + 1});
  }

  render() {
      return (
        <div className="Clicker">
          <h1>Number is {this.state.randNum}</h1> 
          { this.state.randNum === 7 ?
          <h2>You Win</h2> :
          <button id="Clicker-btn" onClick={this.randNum}>Click Me</button>}
          
        </div>
      );
    }
  }
  
  export default Clicker;