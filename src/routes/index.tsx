import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../pages/layouts/Default.tsx";
import Home from "../pages/Home/index.tsx";
import Cursos from "../pages/Cursos/index.tsx";
import Profile from "../pages/Profile/index.tsx";
import FormFeedback from "../components/FormFeedback/index.tsx";
import SearchJob from "../pages/SearchJob/index.tsx";
import Register from "../components/Register/index.tsx";
import RegisterCandidate from "../pages/RegisterCandidate/index.tsx";

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
        element: <Register />,
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
