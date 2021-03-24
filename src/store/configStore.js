import { configureStore } from "@reduxjs/toolkit";
import crudReducer from "../reducer/cardReducer";

export default function createStore() {
  return configureStore({ reducer: crudReducer });
}
