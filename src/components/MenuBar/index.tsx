import { Link } from "react-router-dom";
import DefaultProfile from "../../assets/Default.svg";
import Logo from "../../assets/Logo.svg";
import ThemeSelect from "../ThemeSelect";

function MenuBar() {
  return (
    <>
      <div className="navbar  shadow-lg ">
        <div className="navbar-start">
          <img src={Logo} alt="Logo" className="h-10 my-2 w-auto ml-10" />
          <h1 className="text-3xl my-2 ml-6">Corp Solutions</h1>
        </div>
        <div className="navbar-end hidden lg:flex  ">
          <ul className="menu menu-horizontal px-1 text-lg">
            <li>
              <Link to={`/`}>Home</Link>
            </li>
            <li>
              <Link to={`/cursos`}>Cursos</Link>
            </li>
            <li>
              <Link to={`/feedbacks`}>Feedbacks</Link>
            </li>
            <li>
              <Link to={`/cadastro`}>Cadastro</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end  w-16 ml-32 mr-10">
          <ul className="menu menu-horizontal px-1 text-lg">
            <li>
              <Link to={`/entrar`} className="mr-5">
                Entrar
              </Link>
            </li>
          </ul>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={DefaultProfile} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  <Link to={`/profile`}>Profile</Link>
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ThemeSelect />
    </>
  );
}

export default MenuBar;
