import {
  applyMiddleware,
  combineReducers,
  legacy_createStore,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { reducer as productReducer } from "./productReducer/reducer";
// add your reducer here
const combineReducer = combineReducers({
  productReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  combineReducer,
  composeEnhancer(applyMiddleware(thunk))
);
