import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Zap, Globe, Shield } from 'lucide-react';

export default function Hero() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                {/* Floating Icons */}
                <motion.div style={{ y: y1, x: -100 }} className="absolute top-20 left-10 hidden lg:block opacity-20 text-primary animate-pulse-slow">
                    <Zap size={64} />
                </motion.div>
                <motion.div style={{ y: y2, x: 100 }} className="absolute bottom-40 right-10 hidden lg:block opacity-20 text-secondary animate-float">
                    <Globe size={80} />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-primary/20 text-primary text-sm font-bold mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(0,224,255,0.2)]"
                >
                    <Shield size={16} className="animate-pulse" />
                    <span className="tracking-wider uppercase">Trusted by Leading Industries</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-8 leading-tight"
                >
                    Powering the <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x">
                        Future of Energy
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 font-light leading-relaxed"
                >
                    Nexsafe Energy Infra is your strategic channel partner for <span className="text-white font-semibold">next-gen infrastructure</span>. We turn complex challenges into seamless execution.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <a
                        href="#contact"
                        className="group relative px-8 py-4 bg-primary text-black font-bold rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(0,224,255,0.4)]"
                    >
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        <span className="relative flex items-center gap-2">
                            Partner With Us <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </a>
                    <a
                        href="#about"
                        className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-xl transition-all hover:border-primary/50 backdrop-blur-sm"
                    >
                        Explore Capabilities
                    </a>
                </motion.div>

            </div>
        </div>
    );
}
