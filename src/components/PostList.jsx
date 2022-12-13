import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, remove }) => {
  if (!posts.length) {
    return <h1>Посты не были найдены</h1>;
  }
  return (
    <div className="postList">
      <h1>ТЕМА</h1>
      {posts.map((post, index) => (
        <PostItem remove={remove} index={index + 1} post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostList;
