import AdjacentPostCard from "@/components/AdjacentPostCard";
import PostContent from "@/components/PostContent";
import { getPost } from "@/service/posts";
import { Metadata } from "next";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const { title, description } = await getPost(slug);
  return { title, description };
}

export default async function PostPage({ params: { slug } }: Props) {
  const post = await getPost(slug);
  const { title, imageUrl, prev, next } = post;
  console.log(prev, next);
  return (
    <article className="overflow-hidden rounded-2xl m-4 bg-gray-100">
      <Image
        className="w-full max-h-52"
        src={imageUrl}
        alt={title}
        width={600}
        height={400}
      />
      <PostContent post={post} />
      <section className="flex">
        {prev && <AdjacentPostCard post={prev} type="prev" />}
        {next && <AdjacentPostCard post={next} type="next" />}
      </section>
    </article>
  );
}
