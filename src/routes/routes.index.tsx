import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../pages/layouts/Default";
import Home from "../pages/Home/home";
import Cursos from "../pages/cursos/cursos.tsx";
import FeedBacks from "../pages/FeedBacks";
import Profile from "../pages/Profile";
import FormFeedback from "../components/FormFeedback/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/form",
        element: <FormFeedback />,
      },
      {
        path: "/cursos",
        element: <Cursos />,
      },
      {
        path: "/feedbacks",
        element: <FeedBacks />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

export default router;
