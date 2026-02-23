
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-primary/30 font-sans break-words pb-8">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-slate-500 text-sm border-t border-slate-800/50 mt-12">
        <p>&copy; {new Date().getFullYear()} AI Developer Portfolio. All rights reserved.</p>
      </footer>

      {/* Persistent Chatbot */}
      <Chatbot />
    </div>
  );
}

export default App;
