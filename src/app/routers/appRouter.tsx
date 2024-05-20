import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import { AnimatedLayout } from "@shared/ui/animated-layout";
import { routes } from "./routes";

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
