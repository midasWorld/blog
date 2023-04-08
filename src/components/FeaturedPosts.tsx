import { getFeaturedPosts } from "@/service/posts";
import PostCard from "./PostCard";

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();
  return (
    <section className="m-4">
      <h2 className="font-bold text-2xl mb-2">Featured Posts</h2>
      <ul className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}
