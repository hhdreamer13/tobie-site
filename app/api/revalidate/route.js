import { revalidatePath } from "next/cache";

export async function POST(request) {
  const payload = await request.json();
  console.log(payload);
  let paths = [];

  switch (payload._type) {
    case "newsPost":
      if (payload.slug?.current) {
        paths.push(`/news/${payload.slug.current}`);
        paths.push("/actualites"); // Revalidate the news listing page as well
      }
      break;
    case "pageTexts":
      if (payload.sectionSlug) {
        paths.push(payload.sectionSlug);
      }
      break;
    case "section":
      if (payload.slug?.current) {
        paths.push(payload.slug.current);
      }
      break;
    default:
      return Response.json({ message: "Unsupported type" }, { status: 400 });
  }

  if (paths.length === 0) {
    return Response.json(
      { message: "Unable to determine paths for revalidation" },
      { status: 400 },
    );
  }

  for (const path of paths) {
    try {
      revalidatePath(path);
    } catch (error) {
      console.error("Failed to revalidate:", error);
      return Response.json({ message: "Revalidation failed" }, { status: 500 });
    }
  }

  revalidatePath("/sections/actualites");

  return Response.json({ revalidated: true, paths, now: Date.now() });
}
