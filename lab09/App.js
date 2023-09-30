import React from "react";
import MyNavigator from "./navigation/MyNavigator";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import { configureStore } from '@reduxjs/toolkit';

import mealsReducer from "./store/reducers/mealsReducer";

const rootReducer = combineReducers({
  meals: mealsReducer
})

const store = configureStore({
  reducer: rootReducer, 
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false, // ทำให้ error หาย => A non-serializable value was detected in the state
  }),
});

// const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <MyNavigator/>
    </Provider>
  );
}
