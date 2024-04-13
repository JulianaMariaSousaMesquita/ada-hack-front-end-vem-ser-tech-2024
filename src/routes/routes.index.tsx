import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../pages/layouts/Default";
import Home from "../pages/Home/home";
import Form from "../components/Form/Form.modules.tsx";
import Cursos from "../pages/cursos";
import Cadastro from "../pages/Register";

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
    ],
  },
]);

export default router;
