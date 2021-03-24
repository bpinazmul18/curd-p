import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configStore";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { gameAdded } from "./reducer/gameReducer";

const store = configureStore();

store.dispatch(gameAdded({ title: "test", cover: "hello 123" }));
console.log("store", store.getState());

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
