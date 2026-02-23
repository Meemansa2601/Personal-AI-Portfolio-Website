import React from 'react';
import { Terminal, Bot, Database, CheckCircle2, Shield, Code2 } from 'lucide-react';

const skillGroup = [
    {
        title: "Programming Languages",
        icon: <Terminal className="w-6 h-6 text-emerald-400" />,
        skills: ["C", "C++", "Java", "Python", "JavaScript"],
        bg: "from-emerald-900/20 to-emerald-900/5"
    },
    {
        title: "Web Technologies",
        icon: <Code2 className="w-6 h-6 text-blue-400" />,
        skills: ["React", "HTML/CSS", "Bootstrap", "Node.js"],
        bg: "from-blue-900/20 to-blue-900/5"
    },
    {
        title: "Databases & Tools",
        icon: <Database className="w-6 h-6 text-orange-400" />,
        skills: ["MySQL", "MongoDB", "Git/GitHub", "PyCharm", "IntelliJ"],
        bg: "from-orange-900/20 to-orange-900/5"
    },
    {
        title: "Core & Advanced Tech",
        icon: <Bot className="w-6 h-6 text-purple-400" />,
        skills: ["Generative AI (Learning)", "DSA", "DBMS", "Operating Systems"],
        bg: "from-purple-900/20 to-purple-900/5"
    }
];

const certifications = [
    "Python - Infosys Springboard",
    "Java - NPTEL",
    "C & C++ Certification",
    "Web Development - Udemy",
    "Data Science - NPTEL",
    "Endpoint Management (HCL BigFix)"
];

const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-24 relative bg-slate-900/40 border-y border-slate-800/60 backdrop-blur-3xl">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">

                <div className="mb-20 text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Technical Arsenal</h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {skillGroup.map((group, idx) => (
                        <div key={idx} className={`bg-gradient-to-b ${group.bg} border border-slate-700/50 rounded-3xl p-6 hover:-translate-y-2 transition-transform duration-300 shadow-xl`}>
                            <div className="w-14 h-14 bg-slate-900/80 rounded-2xl flex items-center justify-center mb-6 shadow-inner border border-slate-700/50">
                                {group.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-5">{group.title}</h3>
                            <ul className="space-y-3">
                                {group.skills.map((skill, sIdx) => (
                                    <li key={sIdx} className="flex items-start text-slate-300">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-3 mt-1 flex-shrink-0 opacity-80" />
                                        <span className="font-medium text-sm">{skill}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Certifications Section */}
                <div className="bg-slate-800/40 border border-slate-700/50 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none"></div>

                    <div className="flex items-center gap-3 mb-8">
                        <Shield className="w-8 h-8 text-blue-400" />
                        <h3 className="text-3xl font-bold text-white">Certifications</h3>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {certifications.map((cert, idx) => (
                            <a
                                key={idx}
                                href={`/certificates/${cert.replace(/ /g, '_').toLowerCase()}.pdf`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 bg-slate-900/60 border border-slate-700/50 hover:border-blue-500/50 p-4 rounded-xl transition-all hover:-translate-y-1 shadow-sm hover:shadow-blue-500/10 group cursor-pointer"
                            >
                                <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] group-hover:scale-150 transition-transform"></div>
                                <span className="text-slate-200 font-medium text-sm group-hover:text-blue-300 transition-colors">{cert}</span>
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Skills;
