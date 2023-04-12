import { getFeaturedPosts } from "@/service/posts";
import PostCard from "./PostCard";
import PostsGrid from "./PostsGrid";

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();
  return (
    <section className="m-4">
      <h2 className="font-bold text-2xl mb-2">Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
