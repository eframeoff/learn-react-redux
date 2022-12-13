import { put, takeEvery } from "redux-saga/effects";
import { addCashAction, ASYNC_INC } from "../store/cashReducer";
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* incWorker() {
  yield delay(1000);
  yield put(addCashAction());
}

export function* incWatcher() {
  yield takeEvery(ASYNC_INC, incWorker);
}
