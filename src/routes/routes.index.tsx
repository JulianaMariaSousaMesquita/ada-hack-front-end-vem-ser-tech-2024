import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/home";
import Cursos from "../pages/cursos";
import Cadastro from "../pages/Register";
import FeedBacks from "../pages/FeedBacks";
import Profile from "../pages/Profile";

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
  {
    path: "/feedbacks",
    element: <FeedBacks/>,
  },
  {
    path: "/profile",
    element: <Profile/>,
  },

]);

export default router;
