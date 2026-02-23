import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden relative">
      {/* Background glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] opacity-60 pointer-events-none animate-pulse mix-blend-screen"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px] opacity-60 pointer-events-none animate-pulse delay-700 mix-blend-screen"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-[100%] blur-[100px] opacity-50 pointer-events-none transform rotate-45"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-800/80 backdrop-blur-md border border-slate-700/80 text-sm font-medium text-slate-200 shadow-xl">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            Looking for new opportunities
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.1]">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 hover:from-purple-400 hover:to-blue-400 transition-all duration-1000">Meemansa Gautam</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 font-medium">
            Software Engineer & Computer Engineering Student
          </p>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
            I craft intelligent applications that blend beautiful interfaces with powerful backends. Ask my AI assistant anything about my resume in the chat below!
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 pt-6">
            <a href="#projects" className="px-8 py-4 rounded-full bg-primary hover:bg-blue-500 text-white font-semibold transition-all shadow-[0_0_40px_-10px_rgba(59,130,246,0.6)] hover:shadow-[0_0_60px_-10px_rgba(59,130,246,0.8)] flex items-center gap-2 transform hover:-translate-y-1">
              View My Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="px-8 py-4 rounded-full bg-slate-800/80 backdrop-blur hover:bg-slate-700/80 text-white font-semibold transition-all border border-slate-600 flex items-center gap-2 transform hover:-translate-y-1">
              Contact Me
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-4 rounded-full bg-slate-800/40 backdrop-blur hover:bg-slate-700/60 text-slate-300 font-semibold transition-all border border-slate-700 hover:border-slate-500 flex items-center gap-2 transform hover:-translate-y-1 group">
              Resume <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          <div className="flex items-center gap-8 pt-12 text-slate-400">
            <a href="#" className="hover:text-white transition-colors p-3 hover:bg-slate-800/80 rounded-full border border-transparent hover:border-slate-700 backdrop-blur">
              <Github size={26} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors p-3 hover:bg-slate-800/80 rounded-full border border-transparent hover:border-slate-700 backdrop-blur">
              <Linkedin size={26} />
            </a>
            <a href="mailto:meemansa262005@gmail.com" className="hover:text-red-400 transition-colors p-3 hover:bg-slate-800/80 rounded-full border border-transparent hover:border-slate-700 backdrop-blur">
              <Mail size={26} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
