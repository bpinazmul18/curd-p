import { configureStore } from "@reduxjs/toolkit";
import crudReducer from "../reducer/cardReducer";
import thunk from "redux-thunk";

export default function createStore() {
  return configureStore({
    reducer: crudReducer,
    middleware: [thunk],
  });
}
