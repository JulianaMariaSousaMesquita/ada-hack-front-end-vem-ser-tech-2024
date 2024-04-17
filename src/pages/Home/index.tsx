import imagemGrupo from "../../assets/imagemGrupo.svg";
import imgD03 from "../../assets/imgD03.svg";
import wblack from "../../assets/wblack.png";
import womanlider from "../../assets/womanlider.svg";
import { Carousel } from "../../components/Carousel";

function Home() {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="md:flex md:justify-between items-center">
          <div className="md:w-1/2 md:pr-8">
            <h1 className="text-3xl md:text-4xl font-bold mt-4">
              Diversidade é convidar para a festa, inclusão é chamar para
              dançar!
            </h1>
            <p className="text-base md:text-lg mt-4">
              Nosso propósito é ampliar a representatividade no mercado de
              trabalho. Para isso, conectamos mulheres, pessoas negras,
              indígenas, LGBTQIA+, pessoas com deficiência e +50 anos a
              oportunidades. Faça parte da nossa comunidade na construção de um
              mercado de trabalho mais diverso e inclusivo.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
            <div className="rounded-lg overflow-hidden border-2 border-primary">
              <div className="bg-gradient-to-r from-base-300 to-primary p-8">
                <img
                  src={imagemGrupo}
                  className="w-full"
                  alt="Grupo de pessoas se abraçando"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="font-poppins mt-10 container mx-auto px-7">
          <div className="flex items-center">
            <span className="text-secundary md:text-5xl font-bold font-poppins ">
              Metas de diversidade{" "}
            </span>
          </div>
          <span className="text-secundary md:text-5xl font-bold font-poppins">
            na{" "}
          </span>

          <span className="text-primary md:text-5xl  font-weight-700 font-bold font-poppins ml-2">
            Corp Solutions
          </span>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mt-4 gap-4">
            <div className="md:mx-auto bg-gradient-to-b from-base-300 to-primary rounded-[10px] md:h-[420.70px] flex flex-col items-center justify-center w-full md:w-[265px] mx-2 mb-4 md:mb-0">
              <p className="w-full text-center text-[18px] font-semibold font-poppins  md:mt-0 px-3">
                40% de mulheres na liderança até 2025
              </p>
              <div className="pt-14">
                <img
                  src={womanlider}
                  className="w-full h-auto mb-9"
                  alt="Mulheres líderes: meta de 40% de mulheres na liderança até 2025"
                />
              </div>
            </div>
            <div className="md:mx-auto bg-gradient-to-b from-base-300 to-primary rounded-[10px] md:h-[420.70px] flex flex-col items-center justify-center w-full md:w-[265px] mx-5 mb-4 md:mb-0">
              <p className="w-full text-center text-[px] font-semibold font-poppins mt-4 md:mt-0 px-4">
                Aumentar, consideravelmente, a representatividade de pessoas
                pretas ou pardas no quadro de colaboradores.
              </p>
              <div className="pt-8">
                <img
                  src={wblack}
                  className="w-full h-auto mb-3"
                  alt="Representatividade: meta de aumentar, consideravelmente, a representatividade de pessoas pretas ou pardas no quadro de colaboradores"
                />
              </div>
            </div>
            <div className="md:mx-auto bg-gradient-to-b from-base-300 to-primary rounded-[10px] md:h-[420.70px] flex flex-col items-center justify-center w-full md:w-[265px] mx-5 mb-2 md:mb-0">
              <p className="w-full text-center text-[18px] font-semibold font-poppins mt-4 md:mt-0 px-4">
                Garantir a inclusão e suporte a pessoas com deficiência na nossa
                equipe.
              </p>
              <div className="pt-8">
                <img
                  src={imgD03}
                  className="w-full h-auto mb-9"
                  alt="Inclusão: garantir a inclusão e suporte a pessoas com deficiência na equipe da Corp Solutions"
                />
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
