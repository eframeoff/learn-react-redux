import { cashReducer } from "./cashReducer";
import { customerReducer } from "./customerReducer";
import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import createSagaMiddlware from "redux-saga";
import { rootWatcher } from "../saga";

const sagaMiddleware = createSagaMiddlware();
const rootReducer = combineReducers({
  cash: cashReducer,
  customer: customerReducer,
});
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, sagaMiddleware))
);

sagaMiddleware.run(rootWatcher);
