import React from "react";
import Select from "./../components/ui/select/Select";
import Input from "./../components/ui/input/Input";
import Button from "./../components/ui/button/Button";

const PostMenu = ({ getPosts, setModal, filter, setFilter }) => {
  return (
    <div className="postmenu">
      <Button onClick={() => setModal(true)}>Создать пост</Button>
      <Button onClick={getPosts}>Получить посты</Button>
      <Input
        type="text"
        placeholder="Поиск..."
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        value={filter.query}
      />
      <Select
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        options={[
          { value: "title", name: "По названию" },
          { value: "body", name: "По описанию" },
        ]}
        defaultVal="Сортировка"
      />
    </div>
  );
};

export default PostMenu;
