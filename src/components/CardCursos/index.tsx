import { Link } from "react-router-dom";
import InfoCursosBar from "./infoCursosBar";

interface Curso {
  nome: string;
  descricao: string;
  imagem: string;
}

interface Props {
  curso: Curso;
}

const CardCursos: React.FC<Props> = ({ curso }) => {
  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.src = "/placeholder.jpg";
  };

  return (
    <Link to={`/`} className="flex flex-wrap justify-center items-center h-full">
      <div className="p-2 w-72 h-96 rounded-3xl shadow-xl transition-transform duration-300 transform-gpu hover:scale-105 flex flex-col  bg-base-300">
        <div className="h-[50%] overflow-hidden rounded-t-3xl">
          <img
            src={curso.imagem}
            alt={curso.nome}
            className=" w-full h-full"
            onError={handleImageError}
          />
        </div>
        <div className="mt-2">
          <InfoCursosBar />
        </div>
        <div className="p-3 flex flex-col justify-around flex-1">
          <div>
            <h2 className="card-title mt-3 text-base font-bold">
              {curso.nome}
            </h2>
          </div>
          <div>
            <p className="text-xs">{curso.descricao}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardCursos;
