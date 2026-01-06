import { motion } from 'framer-motion';
import { Award, TrendingUp, Globe, ShieldCheck } from 'lucide-react';

export default function DirectorProfile() {
    return (
        <section className="py-32 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50, rotate: -2 }}
                        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                            <img
                                src="/atul-shukla.jpg"
                                alt="Mr. Atul Shukla - Managing Director"
                                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
                            />

                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                                <h3 className="text-3xl font-bold text-white mb-1">Mr. Atul Shukla</h3>
                                <p className="text-primary font-bold text-lg uppercase tracking-wide">Managing Director</p>
                            </div>
                        </div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="absolute -top-6 -right-6 bg-secondary text-white p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center z-30 hidden md:flex border-2 border-white/10"
                        >
                            <span className="text-4xl font-black">24+</span>
                            <span className="text-xs font-bold uppercase tracking-wider text-center mt-1">Years<br />Leadership</span>
                        </motion.div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="inline-block mb-6">
                            <span className="px-4 py-1 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 text-primary font-bold uppercase tracking-widest text-xs">
                                The Visionary
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-none">
                            Strategic Leadership. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Global Impact.</span>
                        </h2>

                        <p className="text-gray-300 text-lg leading-relaxed mb-10 border-l-2 border-primary/30 pl-6">
                            Leading with over 2 decades of excellence at 3M, Mr. Shukla has managed portfolios exceeding <span className="text-white font-bold">$175 Million USD</span>. His expertise spans Safety, Industrial, and Energy sectors, driving growth through disciplined execution and strategic foresight.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { icon: ShieldCheck, title: "Governance", desc: "Ethics Committee Member" },
                                { icon: TrendingUp, title: "Growth", desc: "P&L Ownership > $175M" },
                                { icon: Globe, title: "Expertise", desc: "Smart Cities & Energy" },
                                { icon: Award, title: "Excellence", desc: "Six Sigma & DFSS" },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.08)" }}
                                    className="p-4 rounded-xl bg-white/5 border border-white/5 transition-all cursor-crosshair"
                                >
                                    <item.icon className="text-primary mb-3" size={24} />
                                    <h4 className="text-white font-bold text-lg">{item.title}</h4>
                                    <p className="text-sm text-gray-400">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
}
