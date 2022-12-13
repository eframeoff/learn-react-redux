import { put, takeEvery, call } from "redux-saga/effects";
import {
  addManyCustAction,
  FETCH_SAGA_ADD_CUST,
} from "../store/customerReducer";

const fetchUsers = () =>
  fetch("https://jsonplaceholder.typicode.com/users?_limit=3");

function* fetchUserWorker() {
  const data = yield call(fetchUsers);
  const json = yield call(() => new Promise((res) => res(data.json())));
  console.log(json);
  yield put(addManyCustAction(json));
}

export function* fetchUserWatcher() {
  yield takeEvery(FETCH_SAGA_ADD_CUST, fetchUserWorker);
}
