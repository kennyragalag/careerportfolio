import About from "./components/About";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import { NavBar } from "./components/NavBar";
import { SocialLinks } from "./components/SocialLinks";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <SocialLinks />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
