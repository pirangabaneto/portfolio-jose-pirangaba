const Feedbacks = () => {
  const contents = [
    {
      author: "Igor Almeida",
      text: (
        <>
          Pirangaba é um excelente Analista de teste, sempre buscando aprimorar
          seus conhecimentos para poder realizar o seu trabalho da melhor
          maneira possível. Destaco que ele desempenhava um papel crucial ao
          identificar diversas falhas de funcionamento, antes mesmo da aplicação
          chegar no cliente, há época que trabalhávamos juntos.
        </>
      ),
      role: "Desenvolvedor Sênior",
    },
  ];
  return (
    <section className="flex flex-row items-center justify-center gap-10 bg-[#F1F0F1] w-screen py-16">
      <div className="text-[#1D191A] w-3/4 rounded-2xl pb-10">
        <p className="text-7xl font-semibold">Depoimentos</p>
        <p className="my-8 text-xl">
          Veja o que meus clientes e colegas dizem sobre o meu trabalho. A
          satisfação e a <br /> colaboração são fundamentais para o sucesso de
          cada projeto
        </p>
        <div className="flex flex-wrap justify-center gap-8 p-6">
          {contents.map((item, index) => (
            <div
              key={index}
              className="w-full max-w-2xl h-80 bg-[#CCC8C8] flex flex-col items-center justify-center p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <p className="italic text-justify ">"{item.text}"</p>
              <div className="mt-8 w-full text-left">
                <h3 className="font-semibold text-xl ">{item.author}</h3>
                <p className="text-md font-normal">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Feedbacks;
