import { TechnologyName } from "./technologies";

export const PROJECT_CARDS: ProjectCardProps[] = [
  {
    name: "Portfolio Blog (WIP)",
    imageSrc: "/images/portfolioBlog.png",
    techs: [
      "React",
      "TypeScript",
      "Sanity",
      "React Router",
      "SCSS",
      "Vite",
      "Framer Motion",
    ],
    gitLink: "https://github.com/Bl1tzed/PortfolioBlog",
    demoLink: "/",
  },
  {
    name: "Landing page (Purrweb)",
    imageSrc: "/images/purrweb.png",
    techs: ["HTML5", "CSS3", "JavaScript", "BEM"],
    gitLink: "https://github.com/Bl1tzed/purrweb-test",
    demoLink: "https://purrweb-blitzed.vercel.app/",
  },
  {
    name: "Shop Cart (Neoflex)",
    imageSrc: "/images/neoflex.png",
    techs: ["React", "React Router", "SCSS", "Vite", "Framer Motion"],
    gitLink: "https://github.com/Bl1tzed/Neoflex-test",
    demoLink: "https://neoflex-blitzed.vercel.app/",
  },
  {
    name: "Weather App",
    imageSrc: "/images/weatherApp.png",
    techs: ["React", "SCSS", "Webpack"],
    gitLink: "https://github.com/Bl1tzed/weather-app",
    demoLink: "https://weather-app-blitzed.vercel.app/moscow?q=moscow_russia",
  },
  {
    name: "Password Generator",
    imageSrc: "/images/passgen.png",
    techs: ["React", "MaterialUI", "Webpack"],
    gitLink: "https://github.com/Bl1tzed/passgen",
    demoLink: "",
  },
];

export type ProjectCardProps = {
  name: string;
  imageSrc: string;
  techs: TechnologyName[];
  gitLink: string;
  demoLink: string;
};
