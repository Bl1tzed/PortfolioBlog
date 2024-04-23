export const formatDate = (dateString: string) =>
  new Date(dateString).toLocaleDateString("ru-RU", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
