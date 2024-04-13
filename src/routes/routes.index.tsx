import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/home";
import Cursos from "../pages/cursos";
import Cadastro from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cursos",
    element: <Cursos />,
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
  },

]);

export default router;
