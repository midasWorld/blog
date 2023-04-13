import Image from "next/image";
import profileImage from "../../public/images/profile.png";
import Link from "next/link";

export default function Profile() {
  return (
    <section className="text-center">
      <Image
        className="rounded-full mx-auto"
        src={profileImage}
        alt="Profile"
        width={200}
        height={200}
        priority
      />
      <h2 className="text-2xl font-bold mt-2">{"Hi, I'm Midas"}</h2>
      <h3 className="text-lg font-semibold">Back-end engineer</h3>
      <p className="text-sm">성장하는 서버 개발자, 미다스</p>
      <Link href="/contact">
        <button className="rounded-xl bg-yellow-500 text-black font-bold p-1 px-3 mt-2">
          Contact Me
        </button>
      </Link>
    </section>
  );
}
