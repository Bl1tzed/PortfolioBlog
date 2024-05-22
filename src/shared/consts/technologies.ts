export const TECHNOLOGIES = [
  { name: "React", imageSrc: "/svg/react.svg" },
  { name: "React Router", imageSrc: "/svg/react-router.svg" },
  { name: "BEM", imageSrc: "/svg/bem.svg" },
  { name: "CSS3", imageSrc: "/svg/css3.svg" },
  { name: "HTML5", imageSrc: "/svg/html5.svg" },
  { name: "Framer Motion", imageSrc: "/svg/framer.svg" },
  { name: "JavaScript", imageSrc: "/svg/js.svg" },
  { name: "MaterialUI", imageSrc: "/svg/materialui.svg" },
  { name: "Sanity", imageSrc: "/svg/sanity.svg" },
  { name: "SCSS", imageSrc: "/svg/scss.svg" },
  { name: "TypeScript", imageSrc: "/svg/ts.svg" },
  { name: "Vite", imageSrc: "/svg/vite.svg" },
  { name: "Webpack", imageSrc: "/svg/webpack.svg" },
] as const;

export type TechnologyName = (typeof TECHNOLOGIES)[number]["name"];
