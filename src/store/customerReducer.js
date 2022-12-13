const defaultState = {
  customers: [],
};

const ADD_CUST = "ADD_CUST";
const DEL_CUST = "DEL_CUST";
const FETCH_THUNK_ADD_CUST = "FETCH_THUNK_ADD_CUST";
export const FETCH_SAGA_ADD_CUST = "FETCH_SAGA_ADD_CUST";

export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_THUNK_ADD_CUST:
      return { ...state, customers: [...state.customers, ...action.payload] };
    case ADD_CUST:
      return { ...state, customers: [...state.customers, action.payload] };
    case DEL_CUST:
      return {
        ...state,
        customers: state.customers.filter(
          (customer) => customer.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export const addCustAction = (payload) => (
  console.log(payload), { type: ADD_CUST, payload }
);
export const delCustAction = (payload) => ({ type: DEL_CUST, payload });
export const addManyCustAction = (payload) => ({
  type: FETCH_THUNK_ADD_CUST,
  payload,
});

export const setUsers = () => ({ type: FETCH_SAGA_ADD_CUST });
