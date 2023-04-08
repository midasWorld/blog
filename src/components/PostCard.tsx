import { Post } from "@/service/posts";
import Image from "next/image";
import Link from "next/link";

export default function PostCard({
  post: { id, title, description, imageUrl, date, category },
}: {
  post: Post;
}) {
  return (
    <li>
      <Link href={`/posts/${id}`}>
        <Image
          className="w-full rounded-t-md"
          src={imageUrl}
          alt={title}
          width={300}
          height={200}
        />
        <div className="flex flex-col items-center p-2 gap-0.5">
          <time className="self-end text-sm text-gray-600">
            {date.toString()}
          </time>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="w-full text-center truncate">{description}</p>
          <span className="bg-lime-100 px-2 rounded-lg mt-1">{category}</span>
        </div>
      </Link>
    </li>
  );
}
