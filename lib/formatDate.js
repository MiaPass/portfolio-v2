/** @param {string} isoMonth YYYY-MM */
export function formatMonthYear(isoMonth, locale) {
  const [year, month] = isoMonth.split("-").map(Number);
  if (!year || !month) return isoMonth;

  const formatted = new Intl.DateTimeFormat(locale, {
    month: "short",
    year: "numeric",
  }).format(new Date(year, month - 1, 1));

  return formatted
    .replace(/\./g, "")
    .replace(/^\p{L}/u, (char) => char.toUpperCase());
}

/**
 * @param {{ start: string, end?: string | null }} range
 * @param {string} locale
 * @param {string} presentLabel
 */
export function formatExperienceRange(range, locale, presentLabel) {
  const start = formatMonthYear(range.start, locale);
  const end = range.end ? formatMonthYear(range.end, locale) : presentLabel;
  return `${start} - ${end}`;
}
