import ContactForm from "@/components/ContactForm";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiVelog } from "react-icons/si";

const LINKS = [
  { icon: <BsGithub />, url: "https://github.com/midasWorld" },
  {
    icon: <BsLinkedin />,
    url: "https://www.linkedin.com/in/dongun-gwak-04b874235/",
  },
  { icon: <SiVelog />, url: "https://midasworld.github.io/" },
];

export default function ContactPage() {
  return (
    <section className="flex flex-col items-center gap-2 mx-auto w-full max-w-md">
      <h2 className="font-bold text-2xl">Contact me</h2>
      <p>midas117@knou.ac.kr</p>
      <ul className="flex text-3xl">
        {LINKS.map((link, index) => (
          <li key={index} className="px-2">
            <a href={link.url} target="_blank">
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
      <h2 className="font-semibold text-2xl my-4">Or Send me an email</h2>
      <ContactForm />
    </section>
  );
}
