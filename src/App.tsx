import { RouterProvider } from "react-router-dom";
import router from "./routes/routes.index";
import { useTheme } from "./contexts/ThemeContext";

function App() {
  const { theme } = useTheme();

  return (
    <div className="h-full min-h-screen" data-theme={theme}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
