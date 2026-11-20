/** Turn a tech string or list into an editorial "A · B · C" line. */
export function formatTechList(techs) {
  if (Array.isArray(techs)) {
    return techs.filter(Boolean).join(" · ");
  }
  if (!techs) return "";
  return String(techs)
    .split(/,\s*/)
    .map((part) => part.trim())
    .filter(Boolean)
    .join(" · ");
}
