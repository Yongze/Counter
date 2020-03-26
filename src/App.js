import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./redux/index";

const App = props => {
  return (
    <div>
      <h1>{props.count}</h1>
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
    </div>
  );
};
/* What parts of state do you want? , What actions to dispatch? */
const mapStateToProps = globalState => ({ count: globalState });
const mapDispatchToProps = {
  increment,
  decrement
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
