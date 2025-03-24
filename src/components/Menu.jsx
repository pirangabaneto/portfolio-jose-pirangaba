const Menu = ({ bgColor = "#F1F0F1", justify = "justify-end" }) => {
  return (
    <nav
      className=" top-0 left-0 w-full font-black py-8 pr-40"
      style={{ backgroundColor: bgColor }}
    >
      <ul className={`flex space-x-8 ${justify} items-center`}>
        <li>
          <a href="#presentation" className="text-[#1D191A]">
            Início
          </a>
        </li>
        <li>
          <a href="#aboutMe" className="hover:underline text-[#1D191A]">
            Sobre Mim
          </a>
        </li>
        <li>
          <a href="#services" className="hover:underline text-[#1D191A]">
            Serviços
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:underline text-[#1D191A]">
            Projetos
          </a>
        </li>
        <li>
          <a href="#feedbacks" className="hover:underline text-[#1D191A]">
            Depimentos
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:underline text-[#1D191A]">
            Contato
          </a>
        </li>
        <li>
          <button className="bg-[#900137] text-white rounded-md shadow-sm shadow-white">
            Baixar Currículo
          </button>
        </li>
      </ul>
    </nav>
  );
};
export default Menu;
