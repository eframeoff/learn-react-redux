import React, { useState } from "react";
import Button from "./../components/ui/button/Button";
import Input from "./../components/ui/input/Input";
const PostForm = ({ create }) => {
  const [inp, setInp] = useState({ title: "", text: "" });

  const addNewPost = (event) => {
    event.preventDefault();
    const newPost = {
      ...inp,
      id: Date.now(),
    };
    console.log(newPost);
    create(newPost);
    setInp({ title: "", text: "" });
  };

  return (
    <div>
      <form style={{ textAlign: "center" }}>
        <Input
          onChange={(event) => setInp({ ...inp, title: event.target.value })}
          value={inp.title}
          type="text"
          placeholder="Название поста"
          style={{ width: "300px" }}
        />
        <Input
          onChange={(event) => setInp({ ...inp, text: event.target.value })}
          value={inp.text}
          type="text"
          placeholder="Текст поста"
          style={{ width: "300px" }}
        />
        <Button onClick={addNewPost}>Добавить пост</Button>
      </form>
    </div>
  );
};

export default PostForm;
