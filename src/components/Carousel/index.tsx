import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export function Carousel() {
  const carousel = useRef<HTMLDivElement>(null);

  const depoimentos = [
    `" Trabalhar na Corp Solutions tem sido uma experiência incrível. Desde o primeiro dia, senti que minhas ideias eram valorizadas e que minha voz realmente importava. A cultura inclusiva da empresa cria um ambiente onde todos se sentem bem-vindos e respeitados, independentemente de sua origem ou identidade. Estou animado para fazer parte de uma equipe tão diversificada e colaborativa!"`,
    `"Como uma pessoa LGBTQ+, encontrar um ambiente de trabalho onde posso ser verdadeiramente eu mesmo é algo que sempre valorizei. Na Corp Solutions, não apenas sou aceito, mas também celebrado pela minha autenticidade. É inspirador fazer parte de uma equipe que reconhece e valoriza a diversidade em todas as suas formas, e isso se reflete em nossa cultura de inovação e criatividade."`,
    `"Trabalhar na Corp Solutions tem sido uma experiência transformadora para mim. Como uma mulher em um campo predominantemente masculino, sempre me preocupei em ser ouvida e levada a sério. Na Corp Solutions, não apenas encontrei um espaço onde minhas contribuições são valorizadas, mas também tenho sido incentivada a crescer e assumir papéis de liderança. Esta empresa realmente se preocupa com o desenvolvimento de seus funcionários e a promoção da igualdade de oportunidades."`,
    `"A Corp Solutions não é apenas uma empresa de tecnologia, é uma comunidade onde cada indivíduo é respeitado e apoiado em sua jornada profissional. Como uma pessoa com deficiência, sempre enfrentei desafios no mercado de trabalho, mas na Corp Solutions, encontrei um ambiente onde minhas necessidades são compreendidas e atendidas. A acessibilidade é prioridade aqui, e isso faz toda a diferença para mim e para outros colegas com deficiência."`,
    `"Trabalhar na Corp Solutions é como fazer parte de uma grande família. A empresa investe não apenas no crescimento profissional de seus funcionários, mas também em seu bem-estar e felicidade geral. A diversidade de perspectivas e experiências enriquece nosso trabalho diário, levando a soluções inovadoras e impactantes. Estou orgulhoso de fazer parte de uma equipe tão dedicada a criar um futuro mais inclusivo e equitativo."`,
  ];

  const handleLeftClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (carousel.current) {
      carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
  };

  const handleRightClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (carousel.current) {
      carousel.current.scrollLeft += carousel.current.offsetWidth;
    }
  };

  return (
    <div className="flex flex-col  ">
      <h2 className="my-10 ml-24 text-2xl">Depoimentos</h2>

      <div className="relative mx-auto  w-full lg:w-[90%] xl:w-[95%] ">
        <button
          onClick={handleLeftClick}
          className="cursor-pointer absolute top-1/2 transform -translate-y-1/2 left-0 z-10 lg:bg-base-100 h-full"
        >
          <FaChevronLeft className="text-slate-50 size-8 lg:size-10" />
        </button>
        <button
          onClick={handleRightClick}
          className="cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-0 z-10 lg:bg-base-100 h-full"
        >
          <FaChevronRight className="text-slate-50 size-8 lg:size-10" />
        </button>
        <div
          ref={carousel}
          className="flex  overflow-x-hidden scroll-smooth  "
          style={{ scrollSnapType: "x mandatory", width: "100%" }}
        >
          {depoimentos.map((depoimento, index) => (
            <div
              key={index}
              className="flex-none w-64 text-sm lg:w-96 p-3 lg:p-6 ml-8 lg:ml-9  bg-gray-300 bg-opacity-50 rounded"
            >
              <p className="text-justify ">{depoimento}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
