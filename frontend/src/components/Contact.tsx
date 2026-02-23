import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-24 relative overflow-hidden border-t border-slate-800/60">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-5xl relative z-10">

                <div className="bg-slate-800/30 border border-slate-700/50 rounded-[3rem] p-8 md:p-16 text-center backdrop-blur-xl shadow-2xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight relative z-10">Let's Build Together</h2>
                    <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed relative z-10">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out to me directly!
                    </p>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12 relative z-10">
                        <a href="mailto:meemansa262005@gmail.com" className="flex items-center gap-3 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/50 hover:border-blue-500/50 px-6 py-4 rounded-2xl transition-all shadow-lg hover:shadow-blue-500/20 w-full md:w-auto transform hover:-translate-y-1">
                            <div className="bg-blue-500/20 p-2 rounded-xl text-blue-400">
                                <Mail size={24} />
                            </div>
                            <div className="text-left">
                                <div className="text-xs text-slate-400 font-medium">Email Me</div>
                                <div className="text-sm font-bold text-white">meemansa262005@gmail.com</div>
                            </div>
                        </a>

                        <a href="tel:+918770823876" className="flex items-center gap-3 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/50 hover:border-emerald-500/50 px-6 py-4 rounded-2xl transition-all shadow-lg hover:shadow-emerald-500/20 w-full md:w-auto transform hover:-translate-y-1">
                            <div className="bg-emerald-500/20 p-2 rounded-xl text-emerald-400">
                                <Phone size={24} />
                            </div>
                            <div className="text-left">
                                <div className="text-xs text-slate-400 font-medium">Call Me</div>
                                <div className="text-sm font-bold text-white">+91 8770823876</div>
                            </div>
                        </a>
                    </div>

                    <a
                        href="mailto:meemansa262005@gmail.com"
                        className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-primary hover:bg-blue-500 rounded-full transition-all shadow-[0_0_40px_-10px_rgba(59,130,246,0.6)] hover:shadow-[0_0_60px_-10px_rgba(59,130,246,0.8)] transform hover:-translate-y-1 relative z-10"
                    >
                        Say Hello
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
