import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import CertSection from "./components/CertSection";
import SkillSection from "./components/SkillSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <CertSection />
      <ProjectSection />
      <SkillSection />
      <ContactSection />
    </div>
  );
}

export default App;
