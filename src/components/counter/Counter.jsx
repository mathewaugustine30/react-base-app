import react, { Component } from "react";
import "./Counter.css";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      total: 0,
    };

    this.increment = this.increment.bind(this);
  }

  increment(by) {
    this.setState({
      total: this.state.total + by,
    });
  }

  render() {
    return (
      <div className="Counter">
        <CounterButton incrementMethod={this.increment} />
        <CounterButton by={2} incrementMethod={this.increment} />
        <CounterButton by={3} incrementMethod={this.increment} />
        <CounterButton by={4} incrementMethod={this.increment} />
        <CounterButton by={5} incrementMethod={this.increment} />
        <span className="counterbuttonspan">{this.state.total}</span>
      </div>
    );
  }
}
class CounterButton extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };

    this.increment = this.increment.bind(this);
  }

  render() {
    return (
      <div className="CounterButton">
        <button onClick={this.increment}>+{this.props.by}</button>
        <span className="counterbuttonspan">{this.state.counter}</span>
      </div>
    );
  }

  increment() {
    this.setState({
      counter: this.state.counter + this.props.by,
    });

    this.props.incrementMethod(this.props.by);
  }
}

CounterButton.defaultProps = {
  by: 1,
};
export default Counter;
