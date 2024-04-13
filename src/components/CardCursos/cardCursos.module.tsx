import { Link } from "react-router-dom";
import InfoCursosBar from "./infoCursosBar.module";

interface Curso {
  nome: string;
  descricao: string;
  imagem: string;
}

interface Props {
  curso: Curso;
}

const CardCursos: React.FC<Props> = ({ curso }) => {
  return (
    <Link to={`/`}>
      <div className="flex place-items-center justify-center content-center w-64 h-80 border rounded-3xl bg-base-100 shadow-xl transition-transform duration-300 transform-gpu hover:scale-105">
        <div className="card w-56 h-72 ">
          <figure>
            <img
              src={curso.imagem}
              alt={curso.nome}
              className="rounded-3xl"
            />
          </figure>
          <div className="card-body">
            <div>
              <InfoCursosBar />
            </div>
            
            <h2 className="card-title m-2 text-sm font-bold text-[#0A033C]">
              {curso.nome}
            </h2>
            <p className="text-xs text-justify text-gray-500">{curso.descricao}</p>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CardCursos;
