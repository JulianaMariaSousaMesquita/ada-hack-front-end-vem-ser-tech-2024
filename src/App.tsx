import { RouterProvider } from "react-router-dom";
import router from "./routes/routes.index";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  // const { theme } = useTheme();

  return (
    <>
      <ThemeProvider>
        <div className="h-screen" data-theme="garden">
          <RouterProvider router={router} />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
