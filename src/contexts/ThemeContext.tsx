import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type ThemeProviderProps = {
  children: ReactNode;
};

interface ThemeContextType {
  theme: string;
  changeTheme: (theme: string) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "",
  changeTheme: ()=>{} ,
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<string>("garden");

  const changeTheme = useCallback((theme: string) => {
    localStorage.setItem("theme", theme);
    setTheme(theme);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
