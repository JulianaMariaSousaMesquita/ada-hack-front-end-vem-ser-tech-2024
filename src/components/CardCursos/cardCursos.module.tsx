import { Link } from "react-router-dom";
import InfoCursosBar from "./infoCursosBar.module";

export default function CardCursos() {
  return (
    <Link to={`/`}>
      <div className="flex place-items-center justify-center content-center w-64 h-80 border rounded-3xl bg-base-100 shadow-xl transition-transform duration-300 transform-gpu hover:scale-105">
        <div className="card w-56 h-72 ">
          <figure>
            <img
              src="https://blog.portalpos.com.br/app/uploads/2022/06/inclus%C3%A3o-e-diversidade-na-educa%C3%A7%C3%A3o-768x419.jpg"
              alt="Curso de Inclusão"
              className="rounded-3xl"
            />
          </figure>
          <div className="card-body">
            <div>
              <InfoCursosBar />
            </div>
            
            <h2 className="card-title m-2 text-sm font-bold text-[#0A033C]">
              Anxiety webinar, from etiology to treatment
            </h2>
            <p className="text-xs text-justify text-gray-500">Anxiety is one of the most common complaints of clients to psychiatrics and psychologists. Although from a semiotic point of view ...</p>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

