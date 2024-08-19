import React, { Component } from "react";

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count1: 0,
      count2: 10,
    };
  }

  increment = () => {
    this.setState((prev)=>{
        return{
            count1:prev.count1+1
        }
    })
  };

  decrement = () => {
    this.setState((prev)=>{
        return{
            count1:prev.count1-1
        }
    })
  };

  reset = () => {
    this.setState(()=>{
        return{
            count1:0
        }
    })
  };

  render = () => {
    return (
      <>
        <div>
          <h1>Counter 1 is {this.state.count1}</h1>
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
          <button onClick={this.reset}>Reset</button>
        </div>
      </>
    );
  };
}
