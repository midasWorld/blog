import FilterablePosts from "@/components/FilterablePosts";
import { getPosts } from "@/service/posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Posts",
  description: "개발 관련 블로그 글",
};

export default async function PostsPage() {
  const posts = await getPosts();
  const categories = [...new Set(posts.map((post) => post.category))];
  return <FilterablePosts categories={categories} posts={posts} />;
}
