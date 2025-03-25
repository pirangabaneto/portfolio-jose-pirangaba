const Services = () => {
  const contents = [
    {
      title: "Web Development",
      text: (
        <>
          Criação de sites e <br /> aplicações web responsivas
        </>
      ),
      icon: "web-development-icon.png",
    },
    {
      title: "Design UI/UX",
      text: (
        <>
          Desenvolvimento de interfaces <br /> intuitivas e experiência do
          usuário <br />
          otimizada
        </>
      ),
      icon: "design-icon.png",
    },
    {
      title: "Software Quality",
      text: (
        <>
          Boas práticas e testes <br /> automatizados para garantir a qualidade
          do código
        </>
      ),
      icon: "softwae-quality-icon.png",
    },
    {
      title: "App Development",
      text: (
        <>
          Construção de aplicações <br /> eficientes e escaláveis
        </>
      ),
      icon: "app-development-icon.png",
    },
  ];
  return (
    <section className="flex flex-row items-center justify-center gap-10 bg-[#F1F0F1] w-screen py-16">
      <div className="text-[#1D191A] w-3/4 rounded-2xl pb-10">
        <p className="text-7xl font-semibold">Serviços</p>
        <p className="my-8 text-xl">
          Soluções completas em desenvolvimento web, design e qualidade de
          software. <br /> Com foco em performance, usabilidade e inovação, crio
          experiências digitais <br /> eficientes e intuitivas para web e mobile
        </p>
        <div className="flex flex-row align-middle justify-center space-x-8 p-4">
          {contents.map((item, index) => (
            <div
              key={index}
              className="w-96 h-80 bg-[#CCC8C8] flex flex-col items-center justify-center text-lg font-bold  m-0 rounded-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={`/${item.icon}`}
                alt="Ícone do serviço"
                className="w-16 h-16"
              />
              <h3 className=" font-semibold m-4 text-xl">{item.title}</h3>
              <p className="text-md font-normal">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
