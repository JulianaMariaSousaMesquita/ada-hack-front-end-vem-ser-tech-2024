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
  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.src = "/placeholder.jpg";
  };

  return (
    <Link to={`/`} className="flex justify-center items-center h-full">
      <div className="p-2 w-64 h-80 border rounded-3xl  shadow-xl transition-transform duration-300 transform-gpu hover:scale-105 flex flex-col  bg-[#ffff]/75">
        <div className="h-40 overflow-hidden rounded-t-3xl">
          <img
            src={curso.imagem}
            alt={curso.nome}
            className="object-cover w-full h-full"
            onError={handleImageError}
          />
        </div>
        <div className="mt-2">
          <InfoCursosBar />
        </div>
        <div className="p-3 flex flex-col justify-between flex-1">
          <div>
            <h2 className="card-title mt-3 text-base font-bold text-[#0A033C]">
              {curso.nome}
            </h2>
          </div>
          <div>
            <p className="text-xs text-justify text-gray-500">
              {curso.descricao}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardCursos;

