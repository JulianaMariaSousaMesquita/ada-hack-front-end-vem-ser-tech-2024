import React, { useState } from "react";
import CardCursos from "../components/CardCursos/cardCursos.module";

const Cursos: React.FC = () => {
  const [filtro, setFiltro] = useState<string>("");

  const cursosInclusaoSocial = [
    {
      id: 1,
      nome: "Cultura e Vida Indígena",
      descricao:
        "Explorando a riqueza cultural e os desafios enfrentados pelas comunidades indígenas.",
      imagem: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      nome: "Empoderamento Feminino no Ambiente Corporativo",
      descricao:
        "Como promover a igualdade de gênero e o empoderamento feminino no local de trabalho.",
      imagem: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      nome: "Desafios LGBTQ+ na Sociedade Contemporânea",
      descricao:
        "Abordando questões enfrentadas pela comunidade LGBTQ+ e promovendo a aceitação e inclusão.",
      imagem: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      nome: "Negritude e o Espaço da Pessoa Negra na Sociedade",
      descricao:
        "Reflexão sobre a história, cultura e luta por igualdade da comunidade negra.",
      imagem: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      nome: "Inclusão de Pessoas com Deficiência no Mercado de Trabalho",
      descricao:
        "Como criar ambientes de trabalho inclusivos para pessoas com deficiência.",
      imagem: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      nome: "Diversidade Cultural e Social nas Organizações",
      descricao:
        "Promovendo a diversidade cultural e social dentro das empresas.",
      imagem: "https://via.placeholder.com/150",
    },
    {
      id: 7,
      nome: "Cidadania LGBTQ+ e Direitos Humanos",
      descricao:
        "Explorando os direitos civis e as lutas da comunidade LGBTQ+.",
      imagem: "https://via.placeholder.com/150",
    },
    {
      id: 8,
      nome: "Mulheres na Política: Desafios e Oportunidades",
      descricao:
        "Reflexão sobre a participação e representatividade das mulheres na política.",
      imagem: "https://via.placeholder.com/150",
    },
    {
      id: 9,
      nome: "Diversidade Religiosa e Respeito às Crenças",
      descricao:
        "Promovendo o respeito e a compreensão das diferentes crenças religiosas.",
      imagem: "https://via.placeholder.com/150",
    },
    {
      id: 10,
      nome: "Refugiados e Migração: Integração e Acolhimento",
      descricao:
        "Abordando questões relacionadas aos refugiados e a importância da integração em novos países.",
      imagem: "https://via.placeholder.com/150",
    },
  ];

  const filtrarCursos = (curso: string): boolean => {
    if (curso.toLowerCase().includes(filtro.toLowerCase())) {
      return true;
    }
    return false;
  };

  return (
    <>
      <div className="flex justify-center items-center my-10">
        <input
          type="text"
          placeholder="Pesquisar cursos..."
          className="border border-gray-300 px-4 py-2 rounded-md"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        />
      </div>

      <div className="p-20 grid grid-cols-3 gap-4">
        {cursosInclusaoSocial
          .filter((curso) => filtrarCursos(curso.nome))
          .map((curso) => (
            <CardCursos key={curso.id} curso={curso} />
          ))}
      </div>
    </>
  );
};

export default Cursos;
