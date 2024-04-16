import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../pages/layouts/Default";
import Home from "../pages/Home/home";
import Cursos from "../pages/cursos/cursos.tsx";
import FeedBacks from "../pages/FeedBacks";
import Profile from "../pages/Profile";
import FormFeedback from "../components/FormFeedback/index.tsx";
import CandidateRegistration from "../pages/CandidateRegistration/index.tsx";

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
        element: <FeedBacks />,
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
        path: "/candidateRegistration",
        element: <CandidateRegistration />,
      },
    ],
  },
]);

export default router;
