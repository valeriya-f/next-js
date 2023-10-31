"use client";

import { getPostsBySearch } from "@/app/services/getPosts";
import { FormEventHandler, useState } from "react";

type Props = {
  onSearch: (value: any[]) => void;
};

const PostSearch = ({ onSearch }: Props) => {
  const [search, setSearch] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event: {
    preventDefault: () => void;
  }) => {
    event.preventDefault();

    const posts = await getPostsBySearch(search);

    onSearch(posts);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      ></input>
      <button type="submit">Search</button>
    </form>
  );
};

export { PostSearch };
