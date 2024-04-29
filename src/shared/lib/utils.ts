export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("ru-RU", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

export function translite(str: string) {
  const ru = {
    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    е: "e",
    ё: "e",
    ж: "j",
    з: "z",
    и: "i",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "h",
    ц: "c",
    ч: "ch",
    ш: "sh",
    щ: "shch",
    ы: "y",
    э: "e",
    ю: "u",
    я: "ya",
    ь: "",
    ъ: "",
    й: "i",
  };

  type latinObj = typeof ru;
  type Key = keyof latinObj;

  const n_str = [];
  for (let i = 0; i < str.length; ++i) {
    const key = str[i].toLowerCase();

    const value = ru[key as Key];
    if (!value) {
      n_str.push(str[i]);
    }

    n_str.push(value);
  }

  return n_str.join("");
}
export function textToAnchor(text: string) {
  text = translite(text);
  return text.toLowerCase().replaceAll(" ", "-");
}
