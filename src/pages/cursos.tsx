import CardCursos from "../components/CardCursos/cardCursos.module";

export default function Cursos() {
    const numeros = Array.from({ length: 9 }, (_, index) => index + 1);

    return (
        <>
            <div className="p-20">
                <h1>
                    <span>CURSOS</span> e Treinamentos
                </h1>
            </div>
            <div className="p-20 grid grid-cols-3 gap-4">
                {numeros.map((numero) => (
                    <CardCursos key={numero} />
                ))}
            </div>
        </>
    );
}
