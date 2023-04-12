import path from "path";
import { readFile } from "fs/promises";

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
};

export async function getFeaturedPosts(): Promise<Post[]> {
  return getPosts() //
    .then((posts) => posts.filter((post) => post.featured));
}

export async function getPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  return readFile(filePath, "utf-8") //
    .then<Post[]>(JSON.parse);
}

export async function getPost(id: string): Promise<PostData> {
  const posts = await getPosts();
  const post = posts.filter((post) => post.id === id)[0];

  if (!post) {
    throw new Error(`Post is not exists. id: ${id}`);
  }

  const filePath = path.join(process.cwd(), "data/posts", post.filePath);
  const content = await readFile(filePath, "utf-8");

  return { ...post, content };
}
