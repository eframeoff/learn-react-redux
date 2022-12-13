import React, { useState, useEffect } from "react";
import "./style/style.css";
import PostList from "./components/PostList";
import PostMenu from "./components/PostMenu";
import Modal from "./components/ui/modal/Modal";
import PostForm from "./components/PostForm";
import { usePosts } from "./components/hooks/usePosts";
import PostService from "./api/services/PostService";
import Loader from "./components/ui/loader/Loader";
import { useGetData } from "./components/hooks/useGetData";
import Redux from "./components/Redux";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });

  const [loader, getPosts, error] = useGetData(async () => {
    const data = await PostService.getAll();
    console.log(data);
    setPosts(data);
  });

  useEffect(() => {
    getPosts();
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const findPosts = usePosts(posts, filter);

  const [modal, setModal] = useState(false);

  return (
    <div className="App">
      <Modal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}></PostForm>
      </Modal>
      <Redux></Redux>
      <h1 style={{ textAlign: "center", backgroundColor: "lightgray" }}>
        {" "}
        REACT{" "}
      </h1>
      <PostMenu
        getPosts={getPosts}
        createPost={createPost}
        filter={filter}
        setFilter={setFilter}
        setModal={setModal}
      ></PostMenu>
      {error && <h1>Ошибка!!! ${error}</h1>}
      {loader ? <Loader /> : <PostList posts={findPosts} remove={removePost} />}
    </div>
  );
}

export default App;
