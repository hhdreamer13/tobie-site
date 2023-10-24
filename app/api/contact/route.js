import { NextResponse } from "next/server";
import { Resend } from "resend";
import ContactUsEmail from "../../../components/common/ContactUsEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const chunks = [];
    for await (const chunk of req.body) {
      chunks.push(chunk);
    }
    const body = Buffer.concat(chunks).toString("utf8");
    const parsedBody = JSON.parse(body);

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "hh.dreamer@gmail.com",
      subject: `Nouveau message : ${parsedBody.firstName} ${parsedBody.lastName}`,
      react: ContactUsEmail(parsedBody),
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error caught:", error);
    return NextResponse.json({ error });
    // return new Response(err.message, { status: 500 });
  }
}
