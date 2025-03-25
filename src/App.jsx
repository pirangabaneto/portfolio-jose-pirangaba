import "./App.css";
import Presentation from "./components/Presentation";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Feedbacks from "./components/Feedbacks";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      {/* Menu */}
      <Menu />

      {/* Apresentação */}
      <section id="presentation">
        <Presentation />
      </section>

      {/* Sobre mim */}
      <section id="aboutMe">
        <AboutMe />
      </section>

      {/* Serviços */}
      <section id="services">
        <Services />
      </section>

      {/* Projetos */}
      <section id="projects">
        <Projects />
      </section>

      {/* Depoimentos */}
      <section id="feedbacks">
        <Feedbacks />
      </section>

      {/* Entre em Contato*/}
      <section id="contact">
        <Contact />
      </section>

      {/* Footer */}
      <Menu bgColor="#900137" justify="justify-center" />
    </>
  );
}

export default App;
