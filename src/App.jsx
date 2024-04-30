import Test from './Test';
import './app.scss';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Parallax from './components/parallax/Parallax';
import Services from './components/services/Services';
import Cursor from './components/cursor/Cursor';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Preloader from './components/preloader/Preloader';

function App() {

  const handleContextMenu = (event) => {
    event.preventDefault();
  };

  let docTitle = document.title;
  window.addEventListener("blur", () => {
    document.title = "Come back🥹";
  })
  window.addEventListener("focus", () => {
    document.title = docTitle;
  })

  return (
    <>
      <Preloader />

      <div onContextMenu={handleContextMenu}>
        <Cursor />
        <section id="Homepage">
          <Navbar />
          <Hero />
        </section>
        <section id="Services">
          <Parallax type="services" />
        </section>
        <section>
          <Services />
        </section>
        <section id="Portfolio">
          <Parallax type="portfolio" />
        </section>
        <Portfolio />
        <section id="Contact">
          <Contact />
        </section>
        {/* <Test /> */}
      </div>
    </>
  );
};

export default App;
