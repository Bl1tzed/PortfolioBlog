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
  };

  type latinObj = typeof ru;

  const n_str = [];

  str = str.replace(/[ъь]+/g, "").replace(/й/g, "i");

  for (let i = 0; i < str.length; ++i) {
    n_str.push(
      ru[str[i] as keyof latinObj] ||
        (ru[str[i].toLowerCase() as keyof latinObj] == undefined && str[i]) ||
        ru[str[i].toLowerCase() as keyof latinObj].toUpperCase()
    );
  }

  return n_str.join("");
}

export function textToAnchor(text: string) {
  text = translite(text);
  return text.toLowerCase().replaceAll(" ", "-");
}
