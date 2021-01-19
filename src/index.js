import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import logger from "redux-logger";
import thunk from "redux-thunk";

const myStore = createStore(reducer,applyMiddleware(thunk,logger));

ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
