export const formatDate = (timestamp: Date) =>
  timestamp.toLocaleDateString("ru-RU", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
