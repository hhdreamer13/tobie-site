import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

export async function POST(req) {
  try {
    // Log the raw request to see what's coming in
    console.log("Incoming Request Headers:", req.headers);
    console.log("Incoming Request Body:", req.body);

    const { isValidSignature, body } = await parseBody(
      req,
      process.env.SANITY_REVALIDATE_SECRET,
    );

    // Log the parsed body and signature validity
    console.log("Parsed body:", body);
    console.log("Is valid signature:", isValidSignature);

    if (!isValidSignature) {
      const message = "Invalid signature";
      return new Response(JSON.stringify({ message, isValidSignature, body }), {
        status: 401,
      });
    }

    if (!body?._type) {
      const message = "Bad Request";
      return new Response(JSON.stringify({ message, body }), { status: 400 });
    }

    // Log the type for revalidation
    console.log("Revalidating tag:", body._type);

    // If the `_type` is `page`, then all `client.fetch` calls with
    // `{next: {tags: ['page']}}` will be revalidated
    revalidateTag(body._type);

    return NextResponse.json({ body });
  } catch (err) {
    // Log any errors that occur
    console.error("Error caught:", err);
    return new Response(err.message, { status: 500 });
  }
}
