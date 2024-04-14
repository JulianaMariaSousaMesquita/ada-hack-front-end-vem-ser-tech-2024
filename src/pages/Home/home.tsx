import { Carousel } from "../../components/Carousel";
import imagemGrupo from "../../assets/imagemGrupo.svg";

function Home() {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="md:flex md:justify-between items-center">
          <div className="md:w-1/2 md:pr-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mt-4">
              Diversidade é convidar para a festa, inclusão é chamar para dançar!
            </h1>
            <p className="text-white text-base md:text-lg mt-4">
              Nosso propósito é ampliar a representatividade no mercado de trabalho. Para isso, conectamos mulheres, pessoas negras, indígenas, LGBTQIA+, pessoas com deficiência e +50 anos a oportunidades. Faça parte da nossa comunidade na construção de um mercado de trabalho mais diverso e inclusivo.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
            <div className="rounded-lg overflow-hidden border-2 border-teal-300">
              <div className="bg-gradient-to-r from-gray-400 to-blue-500 p-8">
                <img src={imagemGrupo} className="w-full" alt="Grupo" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Carousel />
    </>
  );
}

export default Home;
