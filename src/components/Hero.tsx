import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Globe, Shield, Zap } from 'lucide-react';

export default function Hero() {
    const { scrollY } = useScroll();
    const yBackground = useTransform(scrollY, [0, 1000], [0, 300]);
    const yfloat = useTransform(scrollY, [0, 500], [0, -100]);

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

            {/* Background Animated Shapes */}
            <motion.div style={{ y: yBackground }} className="absolute inset-0 z-0 opacity-30 pointer-events-none">
                <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-blob" />
                <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
            </motion.div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                {/* Floating Icons - Repositioned to avoid text overlap */}
                <motion.div
                    style={{ y: yfloat, x: 50 }}
                    className="absolute top-10 left-[10%] hidden xl:block text-primary/10"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
                >
                    <Shield size={120} />
                </motion.div>

                <motion.div
                    style={{ y: yfloat, x: -50 }}
                    className="absolute bottom-20 right-[5%] hidden xl:block text-secondary/10"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
                >
                    <Globe size={180} />
                </motion.div>

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/60 border border-slate-200 text-primary text-sm font-bold mb-10 backdrop-blur-xl shadow-sm hover:shadow-md transition-shadow"
                >
                    <Zap size={16} className="fill-current animate-pulse" />
                    <span className="tracking-widest uppercase text-xs">Empowering Infrastructure</span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-slate-900 mb-8 leading-[0.9] relative z-20"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        Powering the
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary animate-gradient-x py-2" // Added py-2 to prevent clipping
                    >
                        Future of Energy
                    </motion.div>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto mb-12 font-medium leading-relaxed"
                >
                    Nexsafe Energy Infra is your strategic partner for <span className="text-primary font-bold">sustainable growth</span>. We engineer trust into every megawatt.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <a
                        href="#contact"
                        className="group relative px-10 py-5 bg-primary text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary/30"
                    >
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                        <span className="relative flex items-center gap-3 text-lg">
                            Partner With Us <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </a>
                    <a
                        href="#projects"
                        className="px-10 py-5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-bold rounded-full transition-all hover:border-slate-300 shadow-sm hover:shadow-lg text-lg"
                    >
                        View Projects
                    </a>
                </motion.div>

            </div>
        </div>
    );
}
