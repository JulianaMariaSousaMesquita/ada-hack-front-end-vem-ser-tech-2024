import { useTheme } from "../../contexts/ThemeContext";

export default function ThemeSelect() {
  const { changeTheme } = useTheme();

  const handleThemeChange = (e: { target: { value: any; }; }) => {
    const { value } = e.target;
    changeTheme(value);
  };

  return (
    <>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn bg-base-100">
          Tema
          <svg
            width="12px"
            height="12px"
            className="h-2 w-2 fill-current opacity-60 inline-block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2048 2048"
          >
            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52"
        >
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Padrão"
              value="aqua"
              onChange={handleThemeChange}
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Claro"
              value="garden"
              onChange={handleThemeChange}
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Escuro"
              value="business"
              onChange={handleThemeChange}
            />
          </li>
        </ul>
      </div>
    </>
  );
}
