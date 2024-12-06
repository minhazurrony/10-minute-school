export const formatDate = (date: string) => {
  const formattedDate = new Date(date);

  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(formattedDate);
};
