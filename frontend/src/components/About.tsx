import React from 'react';
import { BookOpen, Briefcase, Award } from 'lucide-react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            {/* Background gradient lines */}
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="mb-20 text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 mb-4 tracking-tight">About Me</h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">

                    {/* Main Story */}
                    <div className="lg:col-span-7 space-y-8">
                        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 p-8 rounded-3xl shadow-xl hover:bg-slate-800/40 transition-colors">
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Engineering intelligent solutions for the modern web.
                            </h3>
                            <p className="text-slate-300 leading-relaxed text-lg mb-6">
                                I am a Bachelor of Technology student in Computer Engineering at Cummins College of Engineering for Women in Nagpur. I specialize in building robust software solutions using C++, Java, Python, and React. My passion lies in solving complex problems and I am currently exploring the expansive world of Generative AI.
                            </p>
                            <p className="text-slate-300 leading-relaxed text-lg">
                                Alongside my academic rigor, I thrive in taking responsibility. I serve as the Secretary of the CSI student chapter and an active IEEE volunteer, organizing hackathons and technical events for hundreds of students. Let my AI representative on this page answer any deep questions you might have about my professional background!
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6">
                            <div className="flex-1 bg-gradient-to-br from-blue-900/40 to-slate-900/40 p-6 rounded-3xl border border-blue-500/20 shadow-lg transform hover:-translate-y-1 transition-all">
                                <Briefcase className="text-blue-400 w-8 h-8 mb-4" />
                                <h4 className="text-white font-bold text-xl mb-1">Web Dev Intern</h4>
                                <div className="text-slate-400 text-sm mb-2">CodSoft &bull; Feb - Mar 2025</div>
                                <p className="text-slate-300 text-sm">Engineered responsive UI components and improved site performance ensuring cross-browser compatibility.</p>
                            </div>

                            <div className="flex-1 bg-gradient-to-br from-purple-900/40 to-slate-900/40 p-6 rounded-3xl border border-purple-500/20 shadow-lg transform hover:-translate-y-1 transition-all">
                                <Award className="text-purple-400 w-8 h-8 mb-4" />
                                <h4 className="text-white font-bold text-xl mb-1">Leadership Focus</h4>
                                <div className="text-slate-400 text-sm mb-2">CSI Secretary & IEEE Volunteer</div>
                                <p className="text-slate-300 text-sm">Organized major 300+ student technical events and assisted in conducting vital campus workshops.</p>
                            </div>
                        </div>
                    </div>

                    {/* Education Timeline */}
                    <div className="lg:col-span-5 bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 p-8 rounded-3xl shadow-xl">
                        <div className="flex items-center gap-3 mb-8">
                            <BookOpen className="text-primary w-6 h-6" />
                            <h3 className="text-2xl font-bold text-white">Education Route</h3>
                        </div>

                        <div className="relative border-l-2 border-slate-700 pl-6 space-y-10">

                            <div className="relative">
                                <span className="absolute -left-[35px] top-1 h-5 w-5 rounded-full border-4 border-slate-900 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)]"></span>
                                <h4 className="text-white font-bold text-lg leading-tight">B.Tech - Computer Engineering</h4>
                                <div className="text-primary font-medium text-sm mt-1">Cummins College of Engineering for Women</div>
                                <div className="text-slate-400 text-sm flex justify-between mt-2">
                                    <span>Aug 2023 - July 2027</span>
                                    <span className="font-bold text-blue-300">CGPA: 8.1</span>
                                </div>
                            </div>

                            <div className="relative">
                                <span className="absolute -left-[35px] top-1 h-5 w-5 rounded-full border-4 border-slate-900 bg-slate-600"></span>
                                <h4 className="text-white font-bold text-lg leading-tight">Higher Secondary (12th)</h4>
                                <div className="text-slate-300 text-sm mt-1">Shri Maa Sai Public School</div>
                                <div className="text-slate-400 text-sm flex justify-between mt-2">
                                    <span>2022</span>
                                    <span className="font-bold text-slate-200">88.84%</span>
                                </div>
                            </div>

                            <div className="relative">
                                <span className="absolute -left-[35px] top-1 h-5 w-5 rounded-full border-4 border-slate-900 bg-slate-600"></span>
                                <h4 className="text-white font-bold text-lg leading-tight">Secondary (10th)</h4>
                                <div className="text-slate-300 text-sm mt-1">Golden Tulip International School</div>
                                <div className="text-slate-400 text-sm flex justify-between mt-2">
                                    <span>2020</span>
                                    <span className="font-bold text-slate-200">79%</span>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
