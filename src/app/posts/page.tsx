import FilterablePosts from "@/components/FilterablePosts";
import { getPosts } from "@/service/posts";

export default async function PostsPage() {
  const posts = await getPosts();
  const categories = [...new Set(posts.map((post) => post.category))];
  return <FilterablePosts categories={categories} posts={posts} />;
}
