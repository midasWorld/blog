import PostContent from "@/components/PostContent";
import { getPost } from "@/service/posts";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params: { slug } }: Props) {
  const post = await getPost(slug);
  const { title, imageUrl } = post;
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
    </article>
  );
}
