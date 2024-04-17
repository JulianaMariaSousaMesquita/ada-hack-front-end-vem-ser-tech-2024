import React, { useState } from "react";
import CardCursos from "../../components/CardCursos";
import { cursosData } from './dbCursos';
import { IoSearch } from "react-icons/io5";

const Cursos: React.FC = () => {
  const [filtro, setFiltro] = useState<string>("");

  const filtrarCursos = (curso: string): boolean => {
    return curso.toLowerCase().includes(filtro.toLowerCase());
  };

  const cursosFiltrados = cursosData.filter((curso) =>
    filtrarCursos(curso.nome)
  );

  return (
    <>
      <div className="flex w-full px-4 flex-col justify-center items-center">
        <h2 className="text-2xl lg:text-5xl font-bold text-center">
          Cursos e {" "}
          <span className="text-primary">
            treinamentos
          </span>
        </h2>
        <div className="flex w-64 justify-center items-center mt-10 border border-primary rounded-md transition duration-300">
          <IoSearch className="ml-4" />
          <input
            type="text"
            placeholder="Pesquisar cursos..."
            className="border-none bg-transparent px-4 py-2 focus:outline-none focus:bg-transparent"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
          />
        </div>
      </div>

      <div className="p-4 sm:p-8 md:p-12 lg:p-20 gap-6 flex flex-wrap justify-center">
        {cursosFiltrados.length === 0 ? (
          <p className="text-center text-red-500">Nenhum curso encontrado!</p>
        ) : (
          cursosFiltrados.map((curso) => (
            <CardCursos key={curso.id} curso={curso} />
          ))
        )}
      </div>
    </>
  );
};

export default Cursos;
