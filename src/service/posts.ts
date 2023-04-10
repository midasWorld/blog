import path from "path";
import { promises as fs } from "fs";

export type Post = {
  id: string;
  title: string;
  description: string;
  date: Date;
  category: string;
  imageUrl: string;
  featured: boolean;
};

export async function getFeaturedPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  return await fs
    .readFile(filePath, "utf-8")
    .then<Post[]>(JSON.parse)
    .then((posts) => posts.filter((post) => post.featured));
}

export async function getPost(id: string): Promise<string> {
  const filePath = path.join(
    process.cwd(),
    "data",
    "react-markdown",
    "sample.md"
  );
  const data = await fs.readFile(filePath, "utf8");
  return data;
}
