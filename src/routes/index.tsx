import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import { Devroast } from "../pages/Devroast";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/devroast",
    element: <Devroast />,
  },
]);
