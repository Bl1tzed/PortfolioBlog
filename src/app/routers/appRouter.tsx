import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import { routes } from "./routes";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: routes.map((route) => {
      return {
        element: route.element,
        path: route.path,
      };
    }),
  },
]);
