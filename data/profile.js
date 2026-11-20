/** ISO date: YYYY-MM-DD */
export const birthDate = "1999-10-30";

export const profile = {
  name: "Mia Passalia",
  fullName: "Ianina Mia Passalia",
  email: "passalia.ianina@gmail.com",
  github: "https://www.github.com/MiaPass",
  linkedin: "https://www.linkedin.com/in/ninamiapassalia/",
  cv: {
    es: "/cv-es.pdf",
    en: "/cv-en.pdf",
  },
  available: true,
};

export function getAge(today = new Date()) {
  const [year, month, day] = birthDate.split("-").map(Number);
  let age = today.getFullYear() - year;
  const monthIndex = month - 1;
  const beforeBirthday =
    today.getMonth() < monthIndex ||
    (today.getMonth() === monthIndex && today.getDate() < day);

  if (beforeBirthday) age -= 1;
  return age;
}
