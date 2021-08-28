import "./App.css";
import Greeting from "./Greeting";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      <Greeting />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
