import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../pages/layouts/Default";
import Home from "../pages/Home/home";
import Cursos from "../pages/cursos/cursos.tsx";
import Cadastro from "../pages/Register";
import FeedBacks from "../pages/FeedBacks";
import Profile from "../pages/Profile";
import Login from "../pages/Login/index.tsx";
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
        path: "/cadastro",
        element: <Cadastro />,
      },
      {
        path: "/feedbacks",
        element: <FeedBacks />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/entrar",
        element: <Login />,
      },
    ],
  },
]);

export default router;
