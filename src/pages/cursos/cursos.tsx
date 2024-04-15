import React, { useState } from "react";
import CardCursos from "../../components/CardCursos/cardCursos.module";
import { cursosData } from "./dbCursos";
import SearchBar from "../../components/SearchBar/searchBar.module";


const Cursos: React.FC = () => {
  const [filtro, setFiltro] = useState<string>("");

  const filtrarCursos = (curso: string): boolean => {
    if (curso.toLowerCase().includes(filtro.toLowerCase())) {
      return true;
    }
    return false;
  };

  const cursosFiltrados = cursosData.filter((curso) =>
    filtrarCursos(curso.nome)
  );

  return (
    <>
      <SearchBar value={filtro} onChange={setFiltro} />

      <div className="p-20 grid grid-cols-3 gap-4">
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

