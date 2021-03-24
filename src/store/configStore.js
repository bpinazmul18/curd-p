import { configureStore } from "@reduxjs/toolkit";
import crudReducer from "../reducer/crudReducers";

export default function createStore() {
  return configureStore({ reducer: crudReducer });
}
