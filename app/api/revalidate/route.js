import { revalidateTag, revalidatePath } from "next/cache";

import { NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

export const revalidate = true; // I don't think revalidatePath works anymore. so by adding this it is working.

// Mapping content types to revalidation actions
const revalidationMap = {
  // newsPost: () => {
  //   revalidateTag("newsPost");
  //   revalidatePath("/sections/actualites");
  // },
  newsPost: () => {
    revalidateTag("newsPost");
    revalidatePath("/sections/actualites");

    // Attempting a second revalidation as a fallback with delay
    setTimeout(() => {
      revalidatePath("/sections/actualites");
    }, 5000); // Delay second revalidation by 5 seconds
  },
  atelierPost: () => {
    revalidateTag("atelierPost");
    revalidatePath("/sections/ateliers");
  },
  downloadPost: () => {
    revalidateTag("downloadPost");
    revalidatePath("/sections/souvenirs");
  },
  memoryGameSet: () => {
    revalidateTag("memoryGameSet");
    revalidatePath("/sections/jeu");
  },
  storyVerse: () => {
    revalidateTag("storyVerse");
    revalidatePath("/sections/conte");
  },
  partner: () => {
    revalidateTag("partner");
    revalidatePath("/sections/contact");
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
