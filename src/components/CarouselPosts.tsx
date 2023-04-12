import { getPosts } from "@/service/posts";
import MultiCarousel from "./MultiCarousel";
import PostCard from "./PostCard";

export default async function CarouselPosts() {
  const posts = await getPosts();
  return (
    <section className="m-4">
      <h2 className="font-bold text-2xl my-2">You may like</h2>
      <MultiCarousel>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </MultiCarousel>
    </section>
  );
}
