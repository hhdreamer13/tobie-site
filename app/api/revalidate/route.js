import { revalidateTag, revalidatePath } from "next/cache";

import { NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

export const revalidate = true; // I don't think revalidatePath works anymore. so by adding this it is working.

// Mapping content types to revalidation actions
const revalidationMap = {
  newsPost: () => {
    revalidateTag("newsPost");
    revalidatePath("/sections/actualites");
  },
  pageTexts: () => {
    revalidateTag("pageTexts");
  },
  section: () => {
    revalidateTag("section");
    revalidatePath("/sections");
  },
};

export async function POST(req) {
  try {
    const { isValidSignature, body } = await parseBody(
      req,
      process.env.SANITY_REVALIDATE_SECRET,
    );

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

    // Perform the revalidation based on the content type
    const revalidateAction = revalidationMap[body._type];

    if (revalidateAction) {
      revalidateAction();
    }

    return NextResponse.json({ body });
  } catch (err) {
    // Log any errors that occur
    console.error("Error caught:", err);
    return new Response(err.message, { status: 500 });
  }
}
