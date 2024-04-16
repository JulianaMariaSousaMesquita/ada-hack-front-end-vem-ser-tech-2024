export default function Footer() {
  return (
    <footer className="shadow-inner bg-base-200">
      <div className="px-4 pt-8 lg:px-24 flex flex-wrap gap-4 lg:flex-nowrap justify-between content-center">
        <section>
          <h4 className="font-bold text-xl mb-1">Contato</h4>
          <ul>
            <li className="text-base">Dúvidas frequentes</li>
            <li className="text-base">Fale conosco</li>
          </ul>
        </section>
        <section>
          <h4 className="font-bold text-xl mb-1">Corp Solutions</h4>
          <ul>
            <li className="text-base">Sobre a empresa</li>
            <li className="text-base">Carreiras</li>
          </ul>
        </section>
        <section>
          <h4 className="font-bold text-xl mb-1">Info</h4>
          <ul>
            <li className="text-base">Política de privacidade</li>
            <li className="text-base">Termos de uso</li>
          </ul>
        </section>
        <section className="">
          <h4 className="font-bold text-xl mb-2">Assine nossa newsletter</h4>
          <div>
            <label htmlFor="newsletter" className="hidden">
              Insira seu e-mail:
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="E-mail"
              id="newsletter"
              className="input input-sm input-primary mr-1 xl:min-w-96"
            />
            <button type="button" className="btn btn-sm btn-neutral">
              Assine
            </button>
          </div>
        </section>
      </div>
      <hr className="mx-4 lg:mx-24 h-px my-8 bg-neutral-200 border-0" />
      <section className="px-4 lg:px-24 pb-8 flex flex-wrap gap-4 lg:flex-nowrap justify-between content-center">
        <h4 className="text-base">© Ada Hackathon 2024 - Equipe front-end 1</h4>
      </section>
    </footer>
  );
}
