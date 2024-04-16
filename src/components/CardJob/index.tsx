export default function CardJob() {
  return (
    <div className="card w-96 shadow-inner bg-base-200 transition-transform duration-300 transform-gpu hover:scale-105">
      <div className="card-body">
        <h2 className="card-title">Título vaga</h2>
        <p>
          <span className="font-semibold">Descrição: </span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
        <p>
          <span className="font-semibold">Modelo de trabalho: </span>
          híbrido
        </p>
        <p>
          <span className="font-semibold">Contrato: </span>
          CLT
        </p>
        <p>
          <span className="font-semibold">Local: </span>
          Rio de Janeiro
        </p>
        <div className="card-actions justify-center">
          <button className="btn btn-neutral text-neutral-content w-full">
            Aplicar
          </button>
        </div>
      </div>
    </div>
  );
}
