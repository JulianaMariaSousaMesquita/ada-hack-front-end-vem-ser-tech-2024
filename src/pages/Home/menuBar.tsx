import Logo from "../../assets/Logo.svg";

import { Link } from "react-router-dom";
import userDefault from "../../assets/Default.svg";

function MenuBar() {
  return (
    <div className="flex justify-between bg-[#46509B] text-white">
      <div className="flex">
        <img src={Logo} alt="Logo" className="h-10 my-2 w-auto ml-10" />
        <h1 className="text-3xl my-2 ml-6">Corp Solutions</h1>
      </div>

      <div className="flex">
        <ul className="flex mr-20 my-3 space-x-6">
          <Link to={`/`} className="m-auto">
            <li>Home</li>
          </Link>
          <Link to={`/`} className="m-auto">
            <li>Feedbacks</li>
          </Link>
          <Link to={`/`} className="m-auto">
            <li>Cadastro</li>
          </Link>
          <Link to={`/`} className="m-auto">
            <li>Entrar</li>
          </Link>
        </ul>
        <Link to={`/`} className="m-auto">
          <img
            src={userDefault}
            alt="Usuario padrão"
            className="mr-5 size-9 my-2"
          />
        </Link>
      </div>
    </div>
  );
}

export default MenuBar;
