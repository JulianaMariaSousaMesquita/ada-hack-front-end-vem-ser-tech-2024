import { RouterProvider } from "react-router-dom";
import { useTheme } from "./contexts/ThemeContext";
import router from "./routes/routes";


function App() {
  const { theme } = useTheme();

  return (
    <div className="h-full min-h-screen" data-theme={theme}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
