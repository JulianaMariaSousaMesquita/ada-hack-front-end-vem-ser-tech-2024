import { Carousel } from "../../components/Carousel";
import imagemGrupo from "../../assets/imagemGrupo.svg"
function Home() {
  return (
    <>
     
     <div>
      <div className="w-[1268px] h-[767.53px] relative w-full px-8">
        
    
    
    <div className="w-[588px] h-[272px] text-white text-[51px]  font-bold font-montserrat leading-[53.55px] mt-4 px-5 py-10">Diversidade é convidar para a festa, inclusão é chamar para dançar!”<br/>
    
    </div>
    <div className="w-[555.11px] left-[12px] top-[444.26px] absolute text-white text-[22px] font-normal ml-7 font-poppins">Nosso propósito é ampliar a representatividade no mercado de trabalho. Para isso, conectamos mulheres, pessoas negras, indígenas, LGBTQIA+, pessoas com deficiência e +50 anos a oportunidades. Faça parte da nossa comunidade na construção um mercado de trabalho mais diverso e inclusivo.
    </div>
   
    
    <div className="left-[1100px] top-0 absolute">
        <div className="w-[520px] h-[655px] left-[40px] top-[20px]  absolute rounded-[9px]  border-2 border-teal-300" >
        <div className="w-[508px] h-[650px] bg-gradient-to-r from-gray-400 mt-7  px-8 py-14  to-blue-500 rounded-[13px]">
        <img src={imagemGrupo}  className="w-[445.95px] h-[395.11px] px-1"></img>
        </div>
            </div>
        </div>
    </div>
    </div>
    <Carousel/>
    </>
  );
}

export default Home;
