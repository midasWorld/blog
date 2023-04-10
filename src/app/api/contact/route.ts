import { sendEmail } from "@/service/email";
import { object, string } from "yup";

const contactSchema = object({
  from: string().email().required(),
  subject: string().required(),
  message: string().required(),
});

export async function POST(request: Request) {
  const body = await request.json();
  if (!contactSchema.isValidSync(body)) {
    return new Response(JSON.stringify({ message: "메일 전송 실패!" }), {
      status: 400,
    });
  }
  return sendEmail(body) //
    .then(
      () =>
        new Response(JSON.stringify({ message: "메일 전송 성공!" }), {
          status: 200,
        })
    )
    .catch((err) => {
      console.error(err);
      return new Response(JSON.stringify({ message: "메일 전송 실패!" }), {
        status: 500,
      });
    });
}
