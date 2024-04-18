type Posts = {
  title: string;
  subtitle: string;
  category: string;
  date: Date;
  author: string;
  image: string;
};

export const POSTS_LIST: Posts[] = [
  {
    title: "Global Climate Summit Addresses Urgent Climate Action",
    subtitle:
      "World leaders gathered at the Global Climate Summit to discuss urgent climate action, emissions reductions, and renewable energy targets.",
    category: "Enviroment",
    date: new Date(2023, 0, 5),
    author: "Bibilitzed",
    image: "https://placehold.co/600x400/000000/FFFFFF/png",
  },
  {
    title: "Global Climate Summit Addresses Urgent Climate Action",
    subtitle:
      "World leaders gathered at the Global Climate Summit to discuss urgent climate action, emissions reductions, and renewable energy targets.",
    category: "Enviroment",
    date: new Date(2023, 1, 10),
    author: "Blitzed",
    image: "https://placehold.co/600x400/000000/FFFFFF/png",
  },
];
