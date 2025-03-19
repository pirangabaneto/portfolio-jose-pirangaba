const AboutMe = () => {
  return (
    <section className="flex flex-row items-center justify-center gap-10 bg-[#900137] w-screen py-16 rounded-4xl">
      <div>
        <img src="/front-photo-02.png" alt="Foto de perfil" />
      </div>
      <div className="text-left text-white p-10 w-1/2 rounded-2xl">
        <p className="text-6xl font-semibold">Sobre mim</p>
        <p className="my-8">
          Mestrando em Engenharia da Computação e Desenvolvedor <br />
          FullStack com experiência em PHP, JavaScript, Python, Laravel e <br />
          React. Foco na criação de aplicações eficientes e na qualidade do{" "}
          <br />
          código com testes automatizados. Sempre aprendendo <br />e buscando
          soluções inovadoras.
        </p>
        <div className="space-y-6">
          <div>
            <p className="text-xl font-semibold">Web Development</p>
            <div className="flex gap-1">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="w-14 h-3 bg-[#FF7692] rounded-sm"></div>
              ))}

              {[...Array(2)].map((_, i) => (
                <div key={i} className="w-14 h-3 bg-white rounded-sm"></div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xl font-semibold">Design UI/UX</p>
            <div className="flex gap-1">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-14 h-3 bg-[#FF7692] rounded-sm"></div>
              ))}

              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-14 h-3 bg-white rounded-sm"></div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xl font-semibold">Software Quality</p>
            <div className="flex gap-1">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-14 h-3 bg-[#FF7692] rounded-sm"></div>
              ))}

              {[...Array(1)].map((_, i) => (
                <div key={i} className="w-14 h-3 bg-white rounded-sm"></div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xl font-semibold">App Development</p>
            <div className="flex gap-1">
              {[...Array(7)].map((_, i) => (
                <div key={i} className="w-14 h-3 bg-[#FF7692] rounded-sm"></div>
              ))}

              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-14 h-3 bg-white rounded-sm"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
