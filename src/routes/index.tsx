import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../pages/layouts/Default.tsx";
import Home from "../pages/Home";
import Cursos from "../pages/Cursos";
import FormFeedback from "../components/FormFeedback";
import Profile from "../pages/Profile";
import RegisterEmployee from "../pages/RegisterEmployee/";
import RegisterCandidate from "../pages/RegisterCandidate";
import SearchJob from "../pages/SearchJob";

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
        path: "/cursos",
        element: <Cursos />,
      },
      {
        path: "/feedbacks",
        element: <FormFeedback />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/register-employee",
        element: <RegisterEmployee />,
      },
      {
        path: "/register-candidate",
        element: <RegisterCandidate />,
      },
      {
        path: "/search-job",
        element: <SearchJob />,
      },
    ],
  },
]);

export default router;
