import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../pages/layouts/Default";
import Home from "../pages/Home/home";
import Form from "../components/Form/Form.modules.tsx";
import Cursos from "../pages/cursos";
import Cadastro from "../pages/Register";
import FeedBacks from "../pages/FeedBacks";
import Profile from "../pages/Profile";

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
        element: <Form />,
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
    ],
  },
]);

export default router;
