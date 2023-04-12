"use client";

import { Post } from "@/service/posts";
import Categories from "./Categories";
import PostCard from "./PostCard";
import { useState } from "react";

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
      <ul className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((post) => (
          <li key={post.id}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
      <Categories
        categories={[ALL_POSTS, ...categories]}
        selected={selected}
        onClick={setSelected}
      />
    </section>
  );
}
