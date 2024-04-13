import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/home";
import Cursos from "../pages/cursos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cursos",
    element: <Cursos />,
  },


]);

export default router;
