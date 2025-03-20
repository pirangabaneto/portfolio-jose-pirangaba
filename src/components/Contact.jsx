const Contact = () => {
  return (
    <section className="flex flex-row items-center justify-center bg-[#CCC8C8] w-screen py-32 rounded-4xl">
      <div className="text-[#1D191A] w-3/4 rounded-2xl pb-10">
        <p className="text-7xl font-semibold">Entre em Contato</p>
        <p className="my-8 text-xl">
          Estou à disposição para conversar sobre como podemos trabalhar juntos
          e <br /> transformar suas ideias em realidade. Entre em contato e
          vamos iniciar essa jornada!
        </p>
        <div className="flex items-center justify-center space-x-4 mt-5">
          <input
            type="email"
            placeholder="Digite seu e-mail"
            className="w-1/3 p-4 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#900137]"
          />
          <button className="bg-[#900137] text-white px-6 py-3 rounded-md">
            Entrar em Contato
          </button>
        </div>
      </div>
    </section>
  );
};
export default Contact;
