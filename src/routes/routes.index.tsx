import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  
  
]);

export default router;
