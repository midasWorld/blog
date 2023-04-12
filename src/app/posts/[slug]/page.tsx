import MarkdownViewer from "@/components/MarkdownViewer";
import { getPost } from "@/service/posts";

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params: { slug } }: Props) {
  const post = await getPost(slug);
  const { content } = post;

  return (
    <>
      <MarkdownViewer content={content} />
    </>
  );
}
