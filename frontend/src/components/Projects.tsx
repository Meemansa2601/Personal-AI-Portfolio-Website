import React from 'react';
import { ExternalLink, Github, Code, Database, Library } from 'lucide-react';

const projectsData = [
    {
        title: "EMR Data Processing System",
        date: "Ongoing Live Project",
        organization: "Mahatme Eye Hospital, Nagpur",
        icon: <Database className="w-6 h-6 text-white" />,
        description: "An end-to-end Python-based ETL pipeline profiling EMR and camp Excel datasets for quality documentation. Designed database schemas with comprehensive data mapping for structured, reliable data processing.",
        tech: ["Python", "ETL", "SQL", "Pandas"],
        image: "bg-gradient-to-br from-blue-600 to-indigo-800",
    },
    {
        title: "Scalable Weather App",
        date: "Academic Project",
        organization: "Self-Driven",
        icon: <Code className="w-6 h-6 text-white" />,
        description: "A highly responsive React SPA fetching live weather data via optimized API calls. Implemented robust state management, dynamic UI rendering, interactive loading indicators, and structured error handling.",
        tech: ["React", "JavaScript", "Fetch API", "CSS"],
        image: "bg-gradient-to-br from-purple-600 to-pink-700",
    },
    {
        title: "Library Management System",
        date: "Academic Project",
        organization: "Self-Driven",
        icon: <Library className="w-6 h-6 text-white" />,
        description: "A robust C++ console application applying pure OOP concepts and File I/O. Engineered optimized search and sort algorithms to enhance data retrieval speed and designed reliable book and member modules.",
        tech: ["C++", "OOP", "File I/O", "Algorithms"],
        image: "bg-gradient-to-br from-emerald-600 to-teal-800",
    }
];

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="mb-20 text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Featured Projects</h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {projectsData.map((project, idx) => (
                        <div key={idx} className="group flex flex-col bg-slate-800/40 rounded-3xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 backdrop-blur-sm">

                            {/* Project Header Thumbnail */}
                            <div className={`h-40 w-full ${project.image} relative overflow-hidden flex items-center justify-center`}>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500 border border-white/30 shadow-lg">
                                    {project.icon}
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white leading-tight mb-1">{project.title}</h3>
                                        <div className="text-sm font-medium text-blue-400">{project.organization}</div>
                                    </div>
                                </div>

                                <p className="text-slate-400 mb-8 flex-grow leading-relaxed">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-900/80 text-slate-300 border border-slate-700 shadow-sm">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-6 pt-6 border-t border-slate-700/50">
                                    <a href="#" className="flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-white transition-colors group/link">
                                        <Github size={18} className="group-hover/link:animate-bounce" /> Code
                                    </a>
                                    <a href="#" className="flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors group/link">
                                        <ExternalLink size={18} className="group-hover/link:animate-pulse" /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
