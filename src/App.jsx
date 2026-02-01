import Navbar from "./components/Navbar";
import "./App.css";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacts from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
};
export default App;
