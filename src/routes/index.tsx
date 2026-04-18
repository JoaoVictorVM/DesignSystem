import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import DesignSystem from "../pages/DesignSystem";
import Components from "../pages/Components";
import { Devroast } from "../pages/Devroast";
import PomodoroIdleGame from "../pages/PomodoroIdleGame";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/designsystem",
    element: <DesignSystem />,
  },
  {
    path: "/designsystem/devroast",
    element: <Devroast />,
  },
  {
    path: "/designsystem/pomodoroidlegame",
    element: <PomodoroIdleGame />,
  },
  {
    path: "/components",
    element: <Components />,
  },
]);
