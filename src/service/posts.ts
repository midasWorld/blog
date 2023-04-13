import path from "path";
import { readFile } from "fs/promises";
import { cache } from "react";

export type Post = {
  id: string;
  title: string;
  description: string;
  date: Date;
  category: string;
  imageUrl: string;
  featured: boolean;
  filePath: string;
};

export type PostData = Post & {
  content: string;
  prev: Post | null;
  next: Post | null;
};

export async function getFeaturedPosts(): Promise<Post[]> {
  return getPosts() //
    .then((posts) => posts.filter((post) => post.featured));
}

export const getPosts = cache(async () => {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  return readFile(filePath, "utf-8") //
    .then<Post[]>(JSON.parse);
});

export async function getPost(id: string): Promise<PostData> {
  const posts = await getPosts();
  const post = posts.filter((post) => post.id === id)[0];

  if (!post) {
    throw new Error(`Post is not exists. id: ${id}`);
  }

  const filePath = path.join(process.cwd(), "data/posts", post.filePath);
  const content = await readFile(filePath, "utf-8");

  const index = posts.indexOf(post);
  const prev = index > 0 ? posts[index - 1] : null;
  const next = index < posts.length ? posts[index + 1] : null;

  return { ...post, content, prev, next };
}
