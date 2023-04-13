"use client";

import { Post } from "@/service/posts";
import Categories from "./Categories";
import { useState } from "react";
import PostsGrid from "./PostsGrid";

type Props = {
  categories: string[];
  posts: Post[];
};

const ALL_POSTS = "All Posts";

export default function FilterablePosts({ categories, posts }: Props) {
  const [selected, setSelected] = useState(ALL_POSTS);
  const filtered =
    selected === ALL_POSTS
      ? posts
      : posts.filter((post) => post.category === selected);

  return (
    <section className="flex m-4">
      <PostsGrid posts={filtered} />
      <Categories
        categories={[ALL_POSTS, ...categories]}
        selected={selected}
        onClick={setSelected}
      />
    </section>
  );
}
