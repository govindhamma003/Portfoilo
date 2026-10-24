import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Resume from "./components/Resume";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Sections appear top to bottom in this order (same order as the navbar).
function App() {
  return (
    <div className="min-h-screen font-body text-ink">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Resume />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;