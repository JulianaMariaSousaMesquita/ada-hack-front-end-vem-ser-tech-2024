import React, { useState } from "react";
import CardCursos from "../../components/CardCursos";
//import { cursosData } from "./dbCursos";
import { IoSearch } from "react-icons/io5";

interface Curso {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
}

export const cursosData: Curso[] = [
  {
    id: 1,
    nome: "Cultura e Vida Indígena",
    descricao: "Explorando a riqueza cultural e os desafios enfrentados pelas comunidades indígenas.",
    imagem: "https://www.pensamentoverde.com.br/wp-content/uploads/2018/02/indio1.jpg",
  },
  {
    id: 2,
    nome: "Empoderamento Feminino no Ambiente Corporativo",
    descricao: "Como promover a igualdade de gênero e o empoderamento feminino no local de trabalho.",
    imagem: "https://i0.statig.com.br/bancodeimagens/9p/t9/q5/9pt9q5pp43bqikznixvhk06hb.jpg",
  },
  {
      id: 3,
      nome: "Desafios LGBTQ+ na Sociedade Contemporânea",
      descricao:
        "Abordando questões enfrentadas pela comunidade LGBTQ+ e promovendo a aceitação e inclusão.",
      imagem: "https://43543013.fs1.hubspotusercontent-na1.net/hubfs/43543013/Imported_Blog_Media/qual-e-a-importancia-da-inclusao-lgbtqia-no-mercado-de-trabalho-1.webp",
    },
    {
      id: 4,
      nome: "Negritude e o Espaço da Pessoa Negra na Sociedade",
      descricao:
        "Reflexão sobre a história, cultura e luta por igualdade da comunidade negra.",
      imagem: "https://www.cmfor.ce.gov.br/wp-content/uploads/2021/11/destaque.jpg",
    },
    {
      id: 5,
      nome: "Inclusão de Pessoas com Deficiência no Mercado de Trabalho",
      descricao:
        "Como criar ambientes de trabalho inclusivos para pessoas com deficiência.",
      imagem: "https://diariodainclusaosocial.com/wp-content/uploads/2016/06/deficiente-mercado-trabalho.jpg?w=500&h=312&crop=1",
    },
    {
      id: 6,
      nome: "Diversidade Cultural e Social nas Organizações",
      descricao:
        "Promovendo a diversidade cultural e social dentro das empresas.",
      imagem: "https://midfalconi.com/wp-content/uploads/2022/09/diversidadeculturalnasempresas.jpeg",
    },
    {
      id: 7,
      nome: "Cidadania LGBTQ+ e Direitos Humanos",
      descricao:
        "Explorando os direitos civis e as lutas da comunidade LGBTQ+.",
      imagem: "https://rciararaquara.com.br/wp-content/uploads/2018/05/Marcha_Ara_LGBT-640x360.jpg",
    },
    {
      id: 8,
      nome: "Mulheres na Política: Desafios e Oportunidades",
      descricao:
        "Reflexão sobre a participação e representatividade das mulheres na política.",
      imagem: "https://www.conexao.com/arquivo/thumb/noticias/fe4c4782fdfe2d801022_865x647_0_0_1_1.jpg",
    },
    {
      id: 9,
      nome: "Diversidade Religiosa e Respeito às Crenças",
      descricao:
        "Promovendo o respeito e a compreensão das diferentes crenças religiosas.",
      imagem: "https://files.cercomp.ufg.br/weby/up/401/o/image.jpg",
    },
    {
      id: 10,
      nome: "Refugiados e Migração: Integração e Acolhimento",
      descricao:
        "Abordando questões relacionadas aos refugiados e a importância da integração em novos países.",
      imagem: "https://prefeitura.rio/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-15-at-20.02.26.jpeg",
    },
];


const Cursos: React.FC = () => {
  const [filtro, setFiltro] = useState<string>("");

  const filtrarCursos = (curso: Curso): boolean => {
    return curso.nome.toLowerCase().includes(filtro.toLowerCase());
  };

  const cursosFiltrados = cursosData.filter((curso: Curso) =>
    filtrarCursos(curso)
  );

  return (
    <>
      <div className="flex w-full px-4 flex-col justify-center items-center">
        <h2 className="text-2xl lg:text-5xl font-bold text-center">
          Cursos e <span className="text-primary">treinamentos</span>
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
          cursosFiltrados.map((curso: Curso) => (
            <CardCursos key={curso.id} curso={curso} />
          ))
        )}
      </div>
    </>
  );
};

export default Cursos;
