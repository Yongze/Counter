import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export const increment = () => (dispatch, getState) => {
  //   const currentState = getState();
  //   if (currentState % 2 === 0) {
  //     dispatch({ type: "INCREMENT" });
  //   } else {
  //     setTimeout(() => {
  //       dispatch({ type: "INCREMENT" });
  //     }, 1500);
  //   }
  const number = getState();
  const baseUrl = "https://swapi.co/api/people";
  fetch(`${baseUrl}/${number}`)
    .then(res => res.json())
    .then(res => {
      console.log(res);
      dispatch({
        type: "INCREMENT",
        payload: res
      });
    });
};

export const decrement = () => {
  return {
    type: "DECREMENT"
  };
};

const reducer = (count = 0, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return count + 1;
    }
    case "DECREMENT": {
      return count - 1;
    }
    default:
      return count;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
