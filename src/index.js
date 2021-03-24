import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configStore";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { cardAdded } from "./reducer/cardReducer";

const store = configureStore();

store.dispatch(cardAdded({ name: "test", cover: "hello 123" }));
console.log("store", store.getState());

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
