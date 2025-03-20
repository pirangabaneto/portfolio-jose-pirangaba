const Projects = () => {
  const contents = [
    {
      image: "project-moonwalker.png",
      title: "Project MoonWalker",
    },
  ];
  return (
    <section className="flex flex-row items-center justify-center bg-[#900137] w-screen py-16 rounded-4xl">
      <div className="text-white w-3/4 rounded-2xl pb-10">
        <p className="text-7xl font-semibold">Projetos</p>
        <p className="my-8 text-xl">
          Aqui estão alguns dos meus projetos, unindo tecnologia, design e
          qualidade
        </p>
        <div className="flex flex-row justify-center space-x-10 p-4">
          {contents.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-[22rem] h-96 bg-[#CCC8C8] flex items-center justify-center rounded-xl overflow-hidden">
                <img
                  src={`/${item.image}`}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-xl shadow-lg border border-gray-300 bg-gray-200 hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-semibold mt-4 text-xl text-center">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
