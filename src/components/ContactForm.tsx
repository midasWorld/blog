"use client";

import { sendContactEmail } from "@/service/contact";
import { ChangeEvent, FormEvent, useState } from "react";

type Form = {
  from: string;
  subject: string;
  message: string;
};

const DEFAULT_DATA = {
  from: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<Form>(DEFAULT_DATA);
  const [banner, setBanner] = useState<string | null>();

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendContactEmail(form)
      .then(() => {
        setBanner("✅ 메일을 성공적으로 보냈습니다.");
        setForm(DEFAULT_DATA);
      })
      .catch((err) => {
        console.error(err);
        setBanner("🔥 메일 전송에 실패했습니다. 다시 시도해주세요!");
      })
      .finally(() => {
        setTimeout(() => setBanner(null), 3000);
      });
  };

  return (
    <section className="w-full">
      {banner && <p>{banner}</p>}
      <form
        className="w-full flex flex-col bg-gray-600 text-white p-4 rounded-lg gap-1.5"
        onSubmit={onSubmit}
      >
        <label className="font-semibold" htmlFor="email">
          Your Email
        </label>
        <input
          className="text-black"
          type="email"
          name="from"
          required
          autoFocus
          value={form.from}
          onChange={onChange}
        />
        <label className="font-semibold" htmlFor="Subject">
          Subject
        </label>
        <input
          className="text-black"
          type="text"
          name="subject"
          required
          value={form.subject}
          onChange={onChange}
        />
        <label className="font-semibold" htmlFor="message">
          Message
        </label>
        <textarea
          className="resize-none text-black"
          name="message"
          rows={6}
          value={form.message}
          onChange={onChange}
        />
        <button type="submit" className="bg-yellow-300 text-black">
          Submit
        </button>
      </form>
    </section>
  );
}
