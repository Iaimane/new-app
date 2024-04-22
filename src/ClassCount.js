import React, { Component } from 'react'

export class ClassCount extends Component {
    componentDidMount() {
        document.title = `Vous avez cliqué ${this.state.counter} fois`;
        console.log ('Class Count mounted')
    }

    componentDidUpdate() {
        document.title = `Vous avez cliqué ${this.state.counter} fois`;
        console.log ('Class Count updated')
    }
   

    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        }
    }  
    incrementCounter = () => {
        console.log('The button was clicked!');
        this.setState({counter : this.state.counter +1})
      }

    decrementCounter = () => {
        if (this.state.counter > 0) {
          this.setState({counter: this.state.counter -1});
        }
    }
  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
          <button className="btn btn-success mt-4" onClick={this.incrementCounter}>Increment with class</button>
          <button className="btn btn-danger mt-4" onClick={this.decrementCounter}>Decrement with class</button>
      </div>
    )
  }
}

export default ClassCount
