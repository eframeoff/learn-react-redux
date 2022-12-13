const defaultState = {
  cash: 10,
};

export const ADD = "ADD";
export const DEL = "DEL";
export const ASYNC_INC = "ASYNC_INC";

export const cashReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, cash: state.cash + action.payload };
    case DEL:
      return { ...state, cash: state.cash - action.payload };
    default:
      return state;
  }
};

export const addCashAction = (payload) => ({ type: ADD, payload });
export const delCashAction = (payload) => ({ type: DEL, payload });

export const incAction = () => ({ type: ASYNC_INC });
