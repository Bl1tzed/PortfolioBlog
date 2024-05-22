import { Blogpage } from "@pages/blogpage";
import { Homepage } from "@pages/homepage";
import { Postpage } from "@pages/postpage";
import { PortfolioPage } from "@pages/portfolio";
import { NotFoundPage } from "@pages/notfound";
import { ContactPage } from "@pages/contactpage";
import React from "react";

export const routes = [
  {
    path: "/",
    element: React.createElement(Homepage),
  },
  {
    path: "/blog",
    element: React.createElement(Blogpage),
  },
  {
    path: "/portfolio",
    element: React.createElement(PortfolioPage),
  },
  {
    path: "/contact",
    element: React.createElement(ContactPage),
  },
  {
    path: "/blog/:postSlug",
    element: React.createElement(Postpage),
  },
  {
    path: "*",
    element: React.createElement(NotFoundPage),
  },
];
