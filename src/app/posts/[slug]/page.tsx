type Props = {
  params: {
    slug: string;
  };
};

export default function PostPage({ params: { slug } }: Props) {
  return <h1>{`${slug}번 글!`}</h1>;
}
