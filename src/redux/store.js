import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";

const logger = createLogger();
const enhancer = applyMiddleware(logger);
const reducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "ADD_COUNTER":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "SUB_COUNTER":
      return {
        ...state,
        counter: state.counter - 1,
      };

    default:
      return state;
  }
};

const store = createStore(reducer, enhancer);
export default store;
