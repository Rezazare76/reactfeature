import { createStore } from "redux";

const reducer = (state = 0, action) => {
  // switch (action.type) {
  //   case "INCREMENT":
  //     return state + action.payload;
  //   case "DECREMENT":
  //     return state - action.payload;
  //   default:
  //     return state;
  // }
  state = action.theme;
  return state;
};

export const store = createStore(reducer);
store.subscribe(() => {
  console.log("current state", store.getState());
});
