import React, { useState } from "react";
import "./../style/style.css";
import Button from "./ui/button/Button";
const PostItem = ({ post, index, remove }) => {
  return (
    <div className="post">
      <div className="post__main">
        {index}
        <h1 className="post__title">{post.title}</h1>
        <p>{post.text}</p>
      </div>
      <div className="post__btn">
        <Button onClick={() => remove(post)}>Удалить пост</Button>
      </div>
    </div>
  );
};

export default PostItem;
