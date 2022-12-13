import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomers } from "../asyncActions/customers";
import { addCashAction, delCashAction } from "../store/cashReducer";
import {
  addCustAction,
  delCustAction,
  setUsers,
} from "../store/customerReducer";

const PostItem = ({}) => {
  const dispatch = useDispatch();

  const addNum = () => {
    dispatch(addCashAction(5));
  };
  const delNum = () => {
    dispatch(delCashAction(5));
  };

  const addCust = () => {
    const cust = {
      name: `Иван ` + Math.floor(Math.random() * 100),
      id: Date.now(),
    };
    dispatch(addCustAction(cust));
  };
  const delCust = (customer) => {
    dispatch(delCustAction(customer.id));
  };

  const customers = useSelector((state) => state.customer.customers);
  const cash = useSelector((state) => state.cash.cash);
  return (
    <div className="redux">
      <div className="main">
        <h1 style={{ textAlign: "center", backgroundColor: "lightgray" }}>
          REDUX{" "}
        </h1>
        <div class="main__buttons">
          <div class="main__buttons_num">
            <button onClick={() => addNum()}>Добавить число</button>
            <button onClick={() => delNum()}>Вычесть число</button>
          </div>{" "}
          <div class="main__buttons_users">
            <button onClick={() => addCust()}>Добавить клиента</button>
            <button onClick={() => dispatch(fetchCustomers())}>
              THUNK получить клиентов
            </button>
            <button onClick={() => dispatch(setUsers())}>
              SAGA получить клиентов
            </button>
          </div>
        </div>

        <div class="main__data">
          <div class="main__data_num">
            <h1>{cash}</h1>
          </div>
          <div class="main__data_users">
            {customers.length > 0 ? (
              <div>
                {customers.map((customer) => (
                  <h3>
                    {customer.name}
                    <button
                      style={{ width: "40px" }}
                      onClick={() => {
                        delCust(customer);
                      }}
                    >
                      X
                    </button>
                  </h3>
                ))}
              </div>
            ) : (
              <h1>Клиенты отсутствуют</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
