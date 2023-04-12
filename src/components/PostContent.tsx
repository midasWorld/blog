import { PostData } from "@/service/posts";
import MarkdownViewer from "./MarkdownViewer";
import { AiTwotoneCalendar } from "react-icons/ai";

export default function PostContent({ post }: { post: PostData }) {
  const { title, description, date, content } = post;
  return (
    <section className="flex flex-col p-4 w-full">
      <div className="flex self-end items-center text-sky-600">
        <AiTwotoneCalendar />
        <p className="font-semibold ml-2">{date.toString()}</p>
      </div>
      <h2 className="font-bold text-4xl">{title}</h2>
      <p className="font-semibold mt-2 text-gray-700">{description}</p>
      <div className="w-48 border-2 border-sky-600 mt-4 mb-8" />
      <MarkdownViewer content={content} />
    </section>
  );
}
