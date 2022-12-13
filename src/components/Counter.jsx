import React, { useState } from "react";

const Counter = () => {
  const [likes, setLikes] = useState(0);
  const [value, setValue] = useState("Текст");

  let increment = () => {
    setLikes(likes + 1);
  };
  let decrement = () => {
    setLikes(likes - 1);
  };

  return (
    <div>
      <h1>{value}</h1>
      <h1>{likes}</h1>
      <input
        type="text"
        onChange={(event) => setValue(event.target.value)}
        value={value}
      ></input>
      <button onClick={increment}>Увеличить</button>
      <button onClick={decrement}>Увеличить</button>
    </div>
  );
};

export default Counter;
