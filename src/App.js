import React from "react";
// import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/index";

const App = props => {
  const count = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};
/* What parts of state do you want? , What actions to dispatch? */
// const mapStateToProps = globalState => ({ count: globalState });
// const mapDispatchToProps = {
//   increment,
//   decrement
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;

// https://thoughtbot.com/blog/using-redux-with-react-hooks
// https://react-redux.js.org/api/hooks#usage-warnings
