import React, { useState } from "react";
import CardCursos from "../../components/CardCursos/cardCursos.module";
import { cursosData } from "./dbCursos";
import SearchBar from "../../components/SearchBar/searchBar.module";
import TextoCursos from "../../components/TextoCursos/textoCursos.module";

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
      <div className="flex p-11 flex-col sm:flex-row">
        <div className="flex-grow mb-4 sm:mb-0 sm:mr-2">
            <TextoCursos />
        </div>
        <div className="flex-grow flex justify-end">
          <SearchBar value={filtro} onChange={setFiltro}  />
        </div>
      </div>

      <div className="p-4 sm:p-8 md:p-12 lg:p-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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


