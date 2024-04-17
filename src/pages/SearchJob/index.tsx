import CardJob from "../../components/CardJob";

export default function SearchJob() {
  return (
    <div className="flex flex-col items-center justify-center p-10 gap-8">
      <h2 className="text-4xl font-bold">Vagas abertas</h2>
      <div className="join">
        <input className="input input-bordered join-item" />
        <button className="btn btn-primary join-item rounded-r-full">Pesquisar</button>
      </div>
      <div className="w-full flex flex-wrap items-center justify-center gap-4 -z-0">
        {Array.from({length: 6}).map((_, index) => (<CardJob key={index}/>)) }
      </div>
    </div>
  );
}
