export default function slugify(str) {
  if (typeof str !== "string") {
    return "";
  }
  return str
    .toLowerCase()
    .replace(/[\s]+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with a single hyphen
    .replace(/^-|-$/g, "") // Remove leading and trailing hyphens
    .normalize("NFD") // Normalize the string to decompose accented characters
    .replace(/[\u0300-\u036f]/g, ""); // Remove the accents from the decomposed characters
}
