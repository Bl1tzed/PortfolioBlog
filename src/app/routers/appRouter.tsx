import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import { Blogpage } from "@pages/blogpage";
import { Homepage } from "@pages/homepage";
import { Postpage } from "@pages/postpage";
import { PortfolioPage } from "@pages/portfolio";
import { NotFoundPage } from "@pages/notfound";
import { ContactPage } from "@pages/contactpage";
import { AnimatedLayout } from "@shared/ui/animated-layout";

const routes = [
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/blog",
    element: <Blogpage />,
  },
  {
    path: "/portfolio",
    element: <PortfolioPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/blog/:postSlug",
    element: <Postpage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

export const router = createBrowserRouter([
  {
    element: <App />,
    children: routes.map((route) => {
      return {
        element: <AnimatedLayout>{route.element}</AnimatedLayout>,
        path: route.path,
      };
    }),
  },
]);
