const Presentation = () => {
  return (
    <section className="flex flex-row items-center justify-center gap-10 bg-[#F1F0F1] w-screen py-16">
      <div className="text-left p-10">
        <p className="text-[rgb(29,25,26)] text-2xl font-semibold">
          Oi, meu nome é
        </p>
        <p className="text-[#900137] text-3xl font-semibold">José Pirangaba</p>
        <p className="text-[#1D191A] font-bold text-8xl mr-16">Desenvolvedor</p>
        <p className="text-[#1D191A] font-bold text-8xl text-right">
          FullStack
        </p>
        <p className="text-[#1D191A] text-xl">
          Sou apaixonado por tecnologia e desenvolvimento web.
          <br /> Além de criar soluções eficientes, também pesquiso sobre
          <br /> séries temporais e leciono sobre Design Thinking.
        </p>
        <a href="#contact">
          <button className="bg-[#900137] text-white mt-5 px-16 rounded-md">
            Contrate-me
          </button>
        </a>
      </div>

      <div className="flex flex-col items-center">
        <img src="/front-photo-01.svg" alt="Foto de perfil" />
        <div className="flex flex-row gap-5 mt-5">
          <a href="https://www.linkedin.com/in/josepirangaba/" target="_blank">
            <img
              src="/linkedin.png"
              alt="Ícone do LinkedIn"
              className="w-10 h-10"
            />
          </a>
          <a href="https://github.com/pirangabaneto" target="_blank">
            <img
              src="/github.png"
              alt="Ícone do GitHub"
              className="w-10 h-10"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
