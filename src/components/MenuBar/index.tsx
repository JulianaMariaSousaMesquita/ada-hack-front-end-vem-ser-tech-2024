import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import DefaultProfile from "../../assets/Default.svg";
import Logo from "../../assets/Logo.svg";
import ThemeSelect from "../ThemeSelect";

function MenuBar() {
  return (
    <>
      <div className="navbar  shadow-lg ">
        <div className="dropdown mr-1 w-2 ">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <IoMenu className="size-5 absolute "/>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-1 shadow bg-base-100 rounded-box w-40"
          >
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
        <div className="navbar-start ml-10">
          <img src={Logo} alt="Logo" className="h-6 sm:h-10  w-auto sm:ml-10" />
          <h1 className="text-xs font-bold sm:text-3xl w-32 sm:w-52  my-2 ml-2 ">
            Corp Solutions
          </h1>
        </div>
        <div className="navbar-center hidden lg:flex  w-[30%]">
          <ul className="dropdown dropdown-bottom menu sm:menu-horizontal px-1 text-lg">
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
        <div className="navbar-end w-10 sm:w-16 ml-20 sm:ml-32 mr-0 sm:mr-10 ">
          <ul className="menu menu-horizontal px-0 text-lg">
            <li>
              <Link to={`/entrar`} className="text-xs sm:text-xl mr-0 sm:mr-1">
                Entrar
              </Link>
            </li>
          </ul>
          <div className="dropdown dropdown-end ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className=" rounded-full  size-8 sm:size-10">
                <img alt="Perfil" src={DefaultProfile} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={`/profile`} className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
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
