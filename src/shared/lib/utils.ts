export const formatDate = (timestamp: Date) => {
  return new Date(timestamp).toLocaleDateString("ru-RU", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};
