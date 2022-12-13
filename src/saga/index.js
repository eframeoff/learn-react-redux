import { all } from "redux-saga/effects";
import { fetchUserWatcher } from "./userSaga";
import { incWatcher } from "./cashSaga";

export function* rootWatcher() {
  yield all([fetchUserWatcher(), incWatcher()]);
}
