import React from "react";
import PropTypes from "prop-types";
import { store } from ".";
function Counter({ value, onIncrement, onDecrement, onIncrementAsync }) {
  return (
    <div>
      <button onClick={onIncrementAsync}>Increment after 1 second</button>{" "}
      <button onClick={onIncrement}>Increment</button>{" "}
      <button onClick={onDecrement}>Decrement</button>
      <hr />
      <div>Clicked: {value} times</div>
      <div
        onClick={() =>
          store.dispatch({ count: 1 }, { type: "INCREMENT", value: 1 })
        }
      >
        {" "}
        new value{store.getState()}
      </div>
    </div>
  );
}

Counter.propTypes = {};

export default Counter;
