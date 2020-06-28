import { createStore } from "redux";

const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INC":
      return state + 1;
  }
  return state;
};

const store = createStore(reducer, 1);

store.subscribe(() => {
  console.log("store changed", store.getState());
});

store.dispatch({ type: "INC" });
store.dispatch({ type: "INC" });
store.dispatch({ type: "INC" });
store.dispatch({ type: "INC" });
